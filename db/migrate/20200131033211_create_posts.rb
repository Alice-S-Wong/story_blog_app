class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.integer :chapter_number
      t.string :title
      t.text :body
      t.string :release_date
      t.integer :story_id

      t.timestamps
    end
  end
end
