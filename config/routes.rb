Rails.application.routes.draw do
  # EXAMPLE HTML ROUTE
  # get "/photos" => "photos#index"

  # EXAMPLE JSON ROUTE WITH API NAMESPACE
  namespace :api do
    post "/users" => "users#create"
    patch "/users/:id" => "users#update"
    post "/sessions" => "sessions#create"
    get "/stories/admin" => "stories#admin_index"
    get "/stories" => "stories#index"
    get "/stories/:id" => "stories#show"
    post "/stories" => "stories#create"
    patch "/stories/:id" => "stories#update"
    delete "/stories/:id" => "stories#destroy"
    get "/posts" => "posts#index"
    post "/posts" => "posts#create"
    get "/posts/:id" => "posts#show"
    patch "/posts/:id" => "posts#update"
    delete "/posts/:id" => "posts#destroy"
    get "/comments" => "comments#index"
    post "/comments" => "comments#create"
    delete "/comments/:id" => "comments#destroy"
    get "/authors" => "authors#index"
    post "/authors" => "authors#create"
    patch "/authors/:id" => "authors#update"
  end
end
