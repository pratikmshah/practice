class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user! # before any action from ui we need autheticated signed in user
end
