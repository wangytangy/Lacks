# == Schema Information
#
# Table name: channels
#
#  id                    :integer          not null, primary key
#  title                 :string           not null
#  description           :text             not null
#  user_id               :integer          not null
#  created_at            :datetime
#  updated_at            :datetime
#  direct_message_status :boolean          default(FALSE), not null
#

class Channel < ActiveRecord::Base
  validates :title, :user_id, presence: true
  validates :title, uniqueness: true

  has_many :channel_memberships,
    class_name: :ChannelMembership,
    primary_key: :id,
    foreign_key: :channel_id,
    dependent: :destroy

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  has_many :users, through: :channel_memberships

  has_many :messages,
    class_name: :Message,
    primary_key: :id,
    foreign_key: :channel_id,
    dependent: :destroy

end
