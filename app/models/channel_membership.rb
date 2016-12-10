# == Schema Information
#
# Table name: channel_memberships
#
#  id         :integer          not null, primary key
#  channel_id :integer          not null
#  member_id  :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class ChannelMembership < ActiveRecord::Base
  validates :channel_id, uniqueness: { scope: :member_id }

  belongs_to :channel,
    class_name: :Channel,
    primary_key: :id,
    foreign_key: :channel_id

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :member_id

end
