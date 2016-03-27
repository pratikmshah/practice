Rails.application.routes.draw do
  root 'welcome#index'
  devise_for :users # all routes for devise
  get 'welcome', to: 'welcome#index'
  get 'my_portfolio', to: "users#my_portfolio"
end
