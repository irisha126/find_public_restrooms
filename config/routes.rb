Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations',
    sessions: 'users/sessions'
    }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    
    
    
    root to: "home#index" 
    get '/dashboard', to: 'dashboard#index'
    resources :bathroom_locations do
        resources :reviews
    end
    
    
end
