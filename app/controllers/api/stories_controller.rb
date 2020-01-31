class Api::StoriesController < ApplicationController
  def index
    @stories = Story.where('release_date < ?', DateTime.now.to_date)
    render "index.json.jb"
  end
  def show
    @story = Story.find(params[:id])
    @posts = Post.where(story_id: params[:id])
    @posts = @posts.order(chapter_number: :asc)
    render "show.json.jb"
  end
end
