# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  username            :string           not null
#  email               :string
#  password_digest     :string           not null
#  session_token       :string           not null
#  created_at          :datetime
#  updated_at          :datetime
#  profile_pic_url     :string
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_attached_file :avatar, :s3_protocol => :https
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\z/

  attr_reader :password

  after_initialize :ensure_session_token!

  has_many :channel_memberships,
    class_name: :ChannelMembership,
    primary_key: :id,
    foreign_key: :member_id

  has_many :messages,
    class_name: :Message,
    primary_key: :id,
    foreign_key: :author_id

  has_many :channels, through: :channel_memberships



  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    (user && user.is_password?(password)) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token!
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end


end
