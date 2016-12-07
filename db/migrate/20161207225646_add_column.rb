class AddColumn < ActiveRecord::Migration
  def change
    add_column(:channel_memberships, :created_at, :datetime)
    add_column(:channel_memberships, :updated_at, :datetime)

  end
end
