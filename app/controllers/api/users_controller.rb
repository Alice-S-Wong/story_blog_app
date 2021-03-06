class Api::UsersController < ApplicationController
  def show
    if current_user
      @username = current_user.name
      @email = current_user.email
      @id = current_user.id
      render "show.json.jb"
    end
  end
  def create
    user = User.new(
      name: params[:name],
      email: params[:email],
      password: params[:password],
      password_confirmation: params[:password_confirmation]
    )
    if user.save
      render json: { message: "Admin created successfully" }, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :bad_request
    end
  end
  def update
    if current_user
      user = User.find(current_user.id)
      user.name = params[:name] || user.name
      user.email = params[:email] || user.email
      user.password = params[:password] || user.password
      user.password_confirmation = params[:password_confirmation] || user.password_confirmation
      if user.save
        render json: { message: "Admin information successfully updated" }, status: :created
      else
        render json: { errors: user.errors.full_messages }, status: :bad_request
      end
    else
      render json: {message: "Must be logged in to update admin"}
    end
  end
end
