# == Schema Information
#
# Table name: messages
#
#  id               :integer          not null, primary key
#  body             :text
#  author_id        :integer          not null
#  messageable_id   :integer
#  messageable_type :string
#  created_at       :datetime
#  updated_at       :datetime
#

class Message < ActiveRecord::Base
  validates :author_id, presence: true


  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id

  belongs_to :messageable, polymorphic: true


end
