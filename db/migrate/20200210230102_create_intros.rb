class CreateIntros < ActiveRecord::Migration[6.0]
  def change
    create_table :intros do |t|
      t.text :introduction

      t.timestamps
    end
  end
end
