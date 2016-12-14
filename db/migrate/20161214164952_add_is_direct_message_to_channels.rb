class AddIsDirectMessageToChannels < ActiveRecord::Migration
  def change
    add_column :channels, :direct_message_status, :boolean, null: false, :default => false
  end
end
