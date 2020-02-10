class Api::IntrosController < ApplicationController
  def index
    @intros = Intro.all
    render "index.json.jb"
  end
  def create
    if current_user
      @intro = Intro.new(
        introduction: params[:introduction],
      )
      if @intro.save
        render "show.json.jb"
      end
    else
      render json: {message: "must be logged in to create an intro"}
    end
  end
  def update
    if current_user
      @intro = Intro.find(params[:id])
      @intro.introduction = params[:introduction] || @intro.introduction
      if @intro.save
        render "show.json.jb"
      end
    else
      render json: {message: "must be logged in to update an intro"}
    end
  end
end
