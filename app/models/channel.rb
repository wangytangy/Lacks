# == Schema Information
#
# Table name: channels
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text             not null
#  user_id     :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

class Channel < ActiveRecord::Base
  validates :title, :description, :user_id, presence: true

  has_many :channel_memberships,
    class_name: :ChannelMembership,
    primary_key: :id,
    foreign_key: :channel_id,
    dependent: :destroy

  has_many :users, through: :channel_memberships

  has_many :messages, as: :messageable

end
