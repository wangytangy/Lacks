class RemoveMessageableTypeFromMessages < ActiveRecord::Migration
  def change
    remove_column :messages, :messageable_type, :string
  end
end
