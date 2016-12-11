class ChangeColumnInMessages < ActiveRecord::Migration
  def change
    change_column :messages, :channel_id, :integer, null: false
  end
end
