class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :title
      t.integer :quantity, default: 1
      t.integer :container_id

      t.timestamps
    end
  end
end
