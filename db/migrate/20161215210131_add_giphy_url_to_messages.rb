class AddGiphyUrlToMessages < ActiveRecord::Migration
  def change
    add_column :messages, :giphy_url, :string
  end
end
