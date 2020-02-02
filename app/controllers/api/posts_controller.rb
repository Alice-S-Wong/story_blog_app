class Api::PostsController < ApplicationController
  def index
    if current_user
      stories = Story.all
      @posts = []
      stories.each do |story|
        posts = Post.where(story_id: story.id)
        posts = posts.order(chapter_number: :asc)
        posts.each do |post|
          @posts << post
        end
      end
      render "index.json.jb"
    else
      render json: {message: "Unauthorized to view this index"}
    end
  end
  def create
    if current_user
      # date = DateTime.new((params[:year].to_i), (params[:month].to_i), (params[:day].to_i)).to_date
      @post = Post.new(
        chapter_number: params[:chapter_number],
        title: params[:title],
        body: params[:body],
        release_date: params[:release_date],
        story_id: params[:story_id]
      )
      if @post.save
        render "admin_show.json.jb"
      end
    else
      render json: {message: "Must be logged in to create a post"}
    end
  end
  def show
    @post = Post.find(params[:id])
    p @post.release_date
    p DateTime.now.to_date.to_s
    if @post.release_date < DateTime.now.to_date.to_s
      @comments = Comment.where(post_id: params[:id].to_i)
      if @comments
        render "show.json.jb"
      else
        render "admin_show.json.jb"
      end
    else
      render json: {message: "post not released yet"}
    end
  end
  def update
    if current_user
      # if params[:year] && params[:month] && params[:day]
      #   date = DateTime.new((params[:year].to_i), (params[:month].to_i), (params[:day].to_i)).to_date
      # end
      @post = Post.find(params[:id])
      @post.title = params[:title] || @post.title
      @post.body = params[:body] || @post.body
      @post.release_date = params[:release_date] || @post.release_date
      @post.story_id = params[:story_id] || @post.story_id
      @post.chapter_number = params[:chapter_number] || @post.chapter_number
      if @post.save
        render "admin_show.json.jb"
      end
    else
      render json: {message: "must be logged in to update a post"}
    end
  end
  def destroy
    if current_user
      @post = Post.find(params[:id])
      @post.destroy
      Comment.where(post_id: params[:id]).destroy_all
      render json: {message: "post successfully destroyed"}
    else
      render json: {message: "must be logged in to destroy a post"}
    end
  end
end
