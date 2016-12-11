# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  body       :text
#  author_id  :integer          not null
#  created_at :datetime
#  updated_at :datetime
#  channel_id :integer          not null
#

class Message < ActiveRecord::Base
  validates :author_id, :channel_id, presence: true


  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id

  belongs_to :channel,
    class_name: :Channel,
    primary_key: :id,
    foreign_key: :channel_id


end
