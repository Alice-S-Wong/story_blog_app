class Api::AuthorsController < ApplicationController
  def index
    @authors = Author.all
    render "index.json.jb"
  end
  def create
    if current_user
      @author = Author.new(
        pen_name: params[:pen_name],
        bio: params[:bio]
      )
      if @author.save
        render "show.json.jb"
      end
    else
      render json: {message: "must be logged in to create an author"}
    end
  end
  def update
    if current_user
      @author = Author.find(params[:id])
      @author.pen_name = params[:pen_name] || @author.pen_name
      @author.bio = params[:bio] || @author.bio
      if @author.save
        render "show.json.jb"
      end
    else
      render json: {message: "must be logged in to update an author"}
    end
  end
end
