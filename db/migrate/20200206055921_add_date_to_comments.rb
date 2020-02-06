class AddDateToComments < ActiveRecord::Migration[6.0]
  def change
    add_column :comments, :date, :string
  end
end
