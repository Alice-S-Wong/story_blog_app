Rails.application.routes.draw do
  # EXAMPLE HTML ROUTE
  # get "/photos" => "photos#index"

  # EXAMPLE JSON ROUTE WITH API NAMESPACE
  namespace :api do
    post "/users" => "users#create"
    patch "/users/:id" => "users#update"
    post "/sessions" => "sessions#create"
    get "/stories" => "stories#index"
    get "/stories/:id" => "stories#show"
    post "/stories" => "stories#create"
    patch "/stories/:id" => "stories#update"
    delete "/stories/:id" => "stories#destroy"
  end
end
