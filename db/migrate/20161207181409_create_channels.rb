class CreateChannels < ActiveRecord::Migration
  def change
    create_table :channels do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :channels, :title, unique: true
    add_index :channels, :user_id
  end
end
