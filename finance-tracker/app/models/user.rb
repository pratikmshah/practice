class User < ActiveRecord::Base
  has_many :user_stocks
  has_many :stocks, through: :user_stocks

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def full_name
    return "#{first_name} #{last_name}".strip if (first_name || last_name)
    "Anonymous"
  end

  def can_add_stock?(ticker_symbol)
    under_stock_limit? && !stock_already_added?(ticker_symbol)
  end

  def under_stock_limit?
    (user_stocks.count < 10)
  end

  def stock_already_added?(ticker_symbol)
    stock = Stock.find_by_ticker(ticker_symbol)   # find stock in database
    return false unless stock                     # if stock was not found then no one has added this stock
    user_stocks.where(stock_id: stock.id).exists? # if stock was found check if stock exists in join table
  end

end
