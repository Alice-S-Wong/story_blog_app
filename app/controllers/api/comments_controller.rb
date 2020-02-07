class Api::CommentsController < ApplicationController
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
      @comments = []
      @posts.each do |post|
        comments = Comment.where(post_id: post.id)
        comments.each do |comment|
          @comments << comment
        end
      end
      render "index.json.jb"
    else
      render json: {message: "Unauthorized to view this index"}
    end
  end
  def create
    @comment = Comment.new(
      name: params[:name],
      title: params[:title],
      body: params[:body],
      post_id: params[:post_id],
      date: DateTime.now.to_date.to_s
    )
    if @comment.save
      render "show.json.jb"
    end
  end
  def destroy
    if current_user
      comment = Comment.find(params[:id])
      comment.destroy
      render json: {message: "comment successfully deleted"}
    else
      render json: {message: "Must be logged in to delete comments"}
    end
  end
end
