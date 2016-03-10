require '../stock_trend'

describe StockTrend do

  let(:s) { StockTrend.new }
  let(:html) { s.html }
  let(:data) { html.css(s.trend_id) }

  describe 'variables' do
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

    # check data array to be empty
    # it 'should have an empty array for data' do
    #   expect(s.data.length).to be(0)
    # end
  end

  describe '#html' do
    it 'returns a Nokogiri object back' do
      expect(html.text).to be_instance_of(String)
    end
  end

  describe '#parse_trend' do
    it 'returns html back' do
      result = data[0].first[1]
      expect(result).to be_instance_of(String)
    end
  end

  describe '#convert_obj_to_text' do
    it 'returns back an array' do
      arr = s.convert_obj_to_text(data)
      expect(arr.empty?).to be false
    end
  end
end