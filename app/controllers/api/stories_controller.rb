class Api::StoriesController < ApplicationController
  def index
    @stories = Story.where('release_date < ?', DateTime.now.to_date)
    render "index.json.jb"
  end
  def admin_index
    if current_user
      @stories = Story.all
      render "index.json.jb"
    else
      render json: {message: "Unauthorized to view this index"}
    end
  end
  def create
    if current_user
      # date = DateTime.new((params[:year].to_i), (params[:month].to_i), (params[:day].to_i)).to_date
      @story = Story.new(
        title: params[:title],
        description: params[:description],
        release_date: params[:release_date],
        author_id: params[:author_id]
      )
      if @story.save!
        render "admin_show.json.jb"
      end
    else
      render json: {message: "Must be logged in to create a story"}
    end
  end
  def show
    @story = Story.find(params[:id])
    if @story.release_date < DateTime.now.to_date.to_s
      @posts = Post.where(story_id: params[:id].to_i)
      @posts = @posts.order(chapter_number: :asc)
      render "show.json.jb"
    else
      render json: {message: "story not released yet"}
    end
  end
  def update
    if current_user
      # if params[:year] && params[:month] && params[:day]
      #   date = DateTime.new((params[:year].to_i), (params[:month].to_i), (params[:day].to_i)).to_date
      # end
      @story = Story.find(params[:id])
      @story.title = params[:title] || @story.title
      @story.description = params[:description] || @story.description
      @story.release_date = params[:release_date] || @story.release_date
      if params[:author_id] != "" 
        @story.author_id = params[:author_id] || @story.author_id
      end
      if @story.save
        render "admin_show.json.jb"
      end
    else
      render json: {message: "must be logged in to update a story"}
    end
  end
  def destroy
    if current_user
      @story = Story.find(params[:id])
      @story.destroy
      posts = Post.where(story_id: params[:id])
      posts.each do |post|
        Comment.where(post_id: post.id).destroy_all
      end
      posts.destroy_all
      render json: {message: "story successfully destroyed"}
    else
      render json: {message: "must be logged in to destroy a story"}
    end
  end
end
