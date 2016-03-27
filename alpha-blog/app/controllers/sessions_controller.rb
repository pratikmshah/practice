class SessionsController < ApplicationController

  def new

  end

  def create
    # find user email from form
    user = User.find_by(email: params[:session][:email].downcase)

    # if user is foud and password is correct
    if user && user.authenticate(params[:session][:password])
      session[:user_id] = user.id
      flash[:success] = "You have successfully logged in"
      redirect_to user_path(user)
    else
      flash.now[:danger] = "There was something wrong with your login information"
      render 'new'
    end
  end

  def destroy
    session.delete(:user_id)
    flash[:success] = "You have logged out"
    redirect_to root_path
  end

end