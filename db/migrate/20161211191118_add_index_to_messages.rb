class AddIndexToMessages < ActiveRecord::Migration
  def change
    add_index :messages, :channel_id, unique: true
  end
end
