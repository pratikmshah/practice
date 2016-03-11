require '../stock_trend'

describe StockTrend do

  let(:s) { StockTrend.new }
  let(:html) { s.html }
  let(:data) { html.css(s.trend_id) }
  let(:txt_data) { s.convert_obj_to_text(data) }

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

  describe '#format_text' do
    it 'formats data by including headers and remove unecessary text' do
      # setup
      arr = s.format_text(txt_data)

      expect(arr.include?("Popular searches")).to be(false)
    end
  end

  pending '#remove_new_lines' do
    it '' do
    end
  end

  pending '#insert_headers' do
    it '' do
    end
  end

  pending '#format_results' do
    it '' do
    end
  end

  pending '#display' do
    it '' do
    end
  end
end