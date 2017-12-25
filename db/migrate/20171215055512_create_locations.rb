class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.string :title, unique: true
      t.integer :user_id

      t.timestamps
    end
  end
end
