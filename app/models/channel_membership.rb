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

  belongs_to :channel
  belongs_to :user
end
