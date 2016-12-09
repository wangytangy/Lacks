class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.text :body
      t.integer :author_id, null: false
      t.references :messageable, polymorphic: true, index: true
      t.timestamps
    end
    add_index :messages, :author_id
  end
end
