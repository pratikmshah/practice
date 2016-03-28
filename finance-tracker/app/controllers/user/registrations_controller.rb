# inherit all of devise's registration functionality.
class User::RegistrationsController < Devise::RegistrationsController

  # whatever it cant find here it will look to parent class (Devise) and get it from there
  before_filter :configure_permitted_parameters

  protected

    def configure_permitted_parameters
      devise_parameter_sanitizer.for(:sign_up).push(:first_name, :last_name)
      devise_parameter_sanitizer.for(:account_update).push(:first_name, :last_name)
    end
end