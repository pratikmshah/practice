require '../stock_trend'

describe StockTrend do

  let(:s) { StockTrend.new }
  let(:html) { s.html }
  let(:data) { html.css(s.trend_id) }
  let(:txt_data) { s.convert_obj_to_text(data) }
  let(:data_f) { s.format_text(txt_data) }
  let(:data_with_head) { s.insert_headers(s.remove_new_lines(data_f)) }

  xdescribe 'variables' do
    # check google finance url
    it 'should have the google url' do
      webpage = 'https://www.google.com/finance?hl=en&ei=DongVvm_MdOS2AaU9JbAAQ'
      expect(s.url).to eq(webpage)
    end

    # check google finance url
    it 'should have the goolge target ID' do
      id = '#topmovers'
      expect(s.trend_id).to eq(id)
    end

    # result hash is empty
    it 'needs to have 5 keys' do
      key = s.result.has_key?(:volume)
      expect(key).to be(true)
    end
  end

  xdescribe '#html' do
    it 'returns a Nokogiri object back' do
      expect(html.text).to be_instance_of(String)
    end
  end

  xdescribe '#parse_trend' do
    it 'returns html back' do
      result = data[0].first[1]
      expect(result).to be_instance_of(String)
    end
  end

  xdescribe '#convert_obj_to_text' do
    it 'returns back an array' do
      arr = s.convert_obj_to_text(data)
      expect(arr.empty?).to be false
    end
  end

  xdescribe '#format_text' do
    it 'formats data by including headers and remove unecessary text' do
      header = [ 'Gainers', 'Losers', 'Leaders']
      arr = s.format_text(txt_data)

      expect(arr.include?( "Popular searches" )).to be(false)
      expect(arr.include?( "Excludes stocks" )).to be(false)
      expect(arr.include?( header.sample )).to be(true)
    end
  end

  xdescribe '#remove_new_lines' do
    it 'should not have any new line escape characters' do
      arr = s.remove_new_lines(txt_data)
      expect(arr.include?('\n')).to be(false)
    end
  end

  describe '#insert_headers' do
    it 'should have formated headers starting with T-Sym ending with Mkt Cap' do
      header = data_with_head.slice(0..3)
      expect(header).to eq( ['T-Sym', 'Gainers', 'Change', 'Mkt Cap'] )
    end
  end

  pending '#format_results' do
    it '' do
    end
  end

end