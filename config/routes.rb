Rails.application.routes.draw do
  get 'home/index'
  root 'home#index'
  resources :posts do
    member do
      post :like
    end
  end

  namespace :api do
    namespace :v1 do
      resources :comments,  only: [:index, :show, :create, :destroy]
      resources :posts,  only: [:index, :show]
      resources :likes,  only: [:index, :create]
    end
  end

  devise_for :users
  resource :profiles, only: [:edit, :update, :show]

  resources :colors, only: [:create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
