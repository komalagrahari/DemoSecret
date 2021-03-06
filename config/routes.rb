Rails.application.routes.draw do
  	resources :secret_codes
  	devise_for :users, controllers: { sessions: 'users/sessions', registrations: 'users/registrations' }
  	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	authenticated :user, ->(u) { u.Admin? } do
    	root 'secret_codes#index'
  	end   
  	get 'welcome/index'
	root to: 'welcome#index'
end
