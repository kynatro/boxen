class CreateContainers < ActiveRecord::Migration[5.1]
  def change
    create_table :containers do |t|
      t.integer :location_id
      t.string :title, unique: true

      t.timestamps
    end
  end
end
