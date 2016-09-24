Rails.application.routes.draw do
  devise_for :users
  get 'welcome/index'

  root 'welcome#index' # landing page

  # if user is logged in they will go to below root
  authenticated :user do
    root "docs#index", as: "authenticated_root"
  end

  resources :docs
end
