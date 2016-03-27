class PagesController < ApplicationController
  def home
    # if user is logged in go to articles index page
    redirect_to articles_path if logged_in?
  end

  def about
  end
end