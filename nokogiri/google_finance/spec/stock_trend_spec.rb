require '../stock_trend'

describe StockTrend do

  let(:s) { StockTrend.new }

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
    it 'should have an empty array for data' do
      expect(s.data.length).to be(0)
    end
  end

  pending '#html' do
    it 'returns a Nokogiri object back' do
      html = s.html
      expect(html).to be_instance_of(Nokogiri)
    end
  end
end