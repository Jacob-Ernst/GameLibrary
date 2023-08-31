Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql'
  end
  post '/graphql', to: 'graphql#execute'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'games#index'

  resources :games, only: %w[show], controller: 'games'
  resources :tags, only: %w[show], controller: 'tags'
end
