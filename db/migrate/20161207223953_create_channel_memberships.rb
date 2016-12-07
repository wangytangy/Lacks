class CreateChannelMemberships < ActiveRecord::Migration
  def change
    create_table :channel_memberships do |t|
      t.integer :channel_id, null: false
      t.integer :member_id, null: false
    end
    add_index :channel_memberships, [:channel_id, :member_id], unique: true
  end
end
