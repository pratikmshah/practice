Rails.application.routes.draw do
  devise_for :users # all routes for devise
  resources :user_stocks, except: [:show, :edit, :update]

  root 'welcome#index'
  get 'welcome', to: 'welcome#index'
  get 'my_portfolio', to: "users#my_portfolio"
  get 'search_stocks', to: "stocks#search"
end
