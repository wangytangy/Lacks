class RemoveChannelIdInMessages < ActiveRecord::Migration
  def change
    remove_column :messages, :channel_id
  end
end
