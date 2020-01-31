class CreateStories < ActiveRecord::Migration[6.0]
  def change
    create_table :stories do |t|
      t.string :title
      t.text :description
      t.string :release_date

      t.timestamps
    end
  end
end
