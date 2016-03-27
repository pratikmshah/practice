class StocksController < ApplicationController

  def search
    if params[:stock]
      @stock = Stock.find_by_ticker(params[:stock]) # pass stock data from search form
      @stock ||= Stock.new_from_lookup(params[:stock]) # if stock has not been looked up then fetch data
    end

    if @stock
      #render json: @stock
      render partial: 'lookup'
    else
      render status: :not_found, nothing: true
    end
  end

end