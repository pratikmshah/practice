require '../stock_trend'

describe StockTrend do

  let(:s) { StockTrend.new }

  # check google finance url
  it 'should have the google url' do
    webpage = 'https://www.google.com/finance?hl=en&ei=DongVvm_MdOS2AaU9JbAAQ'
    expect(s.url).to eq(webpage)
  end

end