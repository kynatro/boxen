Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static#index"

  resources :users, only: [:index, :show], constraints: lambda { |req| req.format == :json }
  resources :users, only: [:create, :update, :delete]

  get '*path', controller: :static, action: :index
end
