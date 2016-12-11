class RemoveMessageableIdFromMessages < ActiveRecord::Migration
  def change
    remove_column :messages, :messageable_id, :integer
  end
end
