Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static#index"

  namespace :admin do
    resources :locations, only: [:index, :show], constraints: lambda { |req| req.format == :json }
    resources :locations, only: [:create, :update, :delete]

    resources :users, only: [:index, :show], constraints: lambda { |req| req.format == :json }
    resources :users, only: [:create, :update, :delete]
  end

  resources :locations, only: [:index, :show], constraints: lambda { |req| req.format == :json }
  resources :locations, only: [:create, :update, :delete]

  get '/profile', to: 'users#profile', constraints: lambda { |req| req.format == :json }

  get '*path', controller: :static, action: :index
end
