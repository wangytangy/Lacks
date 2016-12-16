# == Schema Information
#
# Table name: messages
#
#  id                 :integer          not null, primary key
#  body               :text
#  author_id          :integer          not null
#  created_at         :datetime
#  updated_at         :datetime
#  channel_id         :integer          not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  giphy_url          :string
#

class Message < ActiveRecord::Base
  validates :author_id, :channel_id, presence: true

  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/


  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id

  belongs_to :channel,
    class_name: :Channel,
    primary_key: :id,
    foreign_key: :channel_id


end
