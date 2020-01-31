class AddAuthorIdToStory < ActiveRecord::Migration[6.0]
  def change
    add_column :stories, :author_id, :integer
  end
end
