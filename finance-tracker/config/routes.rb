Rails.application.routes.draw do
  root 'welcome#index'
  devise_for :users # all routes for devise
  get 'welcome', to: 'welcome#index'
end
