require 'nokogiri'
require 'open-uri'
require 'text-table'

class StockTrend
  URL = 'https://www.google.com/finance?hl=en&ei=DongVvm_MdOS2AaU9JbAAQ'
  TREND_ID = '#topmovers'
  HEADERS = ['Gainers', 'Losers', 'Leaders', 'Change', 'Volume','Mkt Cap']
  HEAD_ALTR = ["GainersChange", "LosersChange", "LeadersVolume",]

  attr_reader :url, :trend_id, :result

  def initialize
    @result = {
      price_win: Array.new,
      price_loss: Array.new,
      mktcap_win: Array.new,
      mktcap_loss: Array.new,
      volume: Array.new
    }
    @url = URL
    @trend_id = TREND_ID
  end

  # main will run and render entire program
  def main
    data = self.html
    data = self.parse_trend(data)
    data = convert_obj_to_text(data)
    data = format_text(data)
    data = insert_headers(data)
    data = remove_new_lines(data)
    format_results(data)
    display
  end

  # retrieve html
  def html
    Nokogiri::HTML(open(self.url))
  end

  # return google trends html
  def parse_trend(html)
    html.css(self.trend_id)
  end

  # convert object to string and return an array
  def convert_obj_to_text(data)
    data.text.split("\n")
  end

  # delete unecessary text
  def format_text(data)
    # replace popular searches
    index = data.index { |element| element.include?("Popular searches") }
    data.slice!(index..data.index(data.last))

    # replace excludes stocks
    exclude_stocks_text(data)
    data = adjust_headers(data, HEAD_ALTR[0])
    data = adjust_headers(data, HEAD_ALTR[1])
    data = adjust_headers(data, HEAD_ALTR[2])
    return data
  end

  # insert ticker header
  def insert_headers(data)
    _index = []
    data.each_with_index do |element, index|
      if (element == 'Gainers' || element == 'Losers' || element == 'Leaders')
        _index << index
      end
    end

    pos = 0
    _index.each do |index|
      data.insert((index + pos), 'T-Sym')
      pos += 1
    end

    return data
  end

  def remove_new_lines(data)
    data.delete_if  { |element| element.empty? }
  end


  def format_results(data)
    counter = 0

    loop do
      line = data.shift(4)

      if line.include?('T-Sym')
        counter += 1
      end

      if counter == 1
        self.result[:price_win] << line
      elsif counter == 2
        self.result[:price_loss] << line
      elsif counter == 3
        self.result[:mktcap_win] << line
      elsif counter == 4
        self.result[:mktcap_loss] << line
      else
        self.result[:volume] << line
      end

      break if data.empty?
    end
  end

  def display
    self.result.each do |k, v|
      puts v.to_table(:first_row_is_head => true)
    end
  end

  private ####################

    def exclude_stocks_text(data)
      loop do
        index = data.index { |element| element.include?("Excludes stocks") }
        break if index == nil
        next_el = index + 1
        data.slice!(index..next_el)
      end
      return data
    end

    def adjust_headers(data, header_name)
      loop do
        index = data.index { |element| element.include?(header_name) }

        break if index == nil

        if header_name == "GainersChange"
          data[index] = HEADERS[0]
          index += 1
          data[index] = HEADERS[3]
          index += 1
          data[index] = HEADERS[5]
        elsif header_name == "LosersChange"
          data[index] = HEADERS[1]
          index += 1
          data[index] = HEADERS[3]
          index += 1
          data[index] = HEADERS[5]
        elsif header_name == "LeadersVolume"
          data[index] = HEADERS[2]
          index += 1
          data[index] = HEADERS[4]
          index += 1
          data[index] = HEADERS[5]
        end
      end
      return data
    end
end