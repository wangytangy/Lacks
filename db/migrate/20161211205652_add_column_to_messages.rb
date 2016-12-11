class AddColumnToMessages < ActiveRecord::Migration
  def change
    add_reference :messages, :channel, index: true, foreign_key: true, null: false
  end
end
