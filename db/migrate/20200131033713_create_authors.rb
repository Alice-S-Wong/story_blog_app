class CreateAuthors < ActiveRecord::Migration[6.0]
  def change
    create_table :authors do |t|
      t.string :pen_name
      t.text :bio

      t.timestamps
    end
  end
end
