class AddAttachmentImageToMessages < ActiveRecord::Migration
  def self.up
    change_table :messages do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :messages, :image
  end
end
