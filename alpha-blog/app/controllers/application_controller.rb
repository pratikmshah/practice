class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # let rails know these are helper methods so that they are accessible to the views
  helper_method :current_user, :logged_in?

  def current_user
    # return current_user if already found or else ping db and find it only if a session[:user_id] exists
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  def logged_in?
    !!current_user  # !! converts to true or false
  end

  def require_user
    # if user is not logged in then redirect to homepage
    if !logged_in?
      flash[:danger] = "You must be logged in to perfom that action"
      redirect_to root_path
    end
  end

end
