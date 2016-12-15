class ChangeDescriptionInChannels < ActiveRecord::Migration
  def change
    change_column :channels, :description, :text, null: true
  end
end
