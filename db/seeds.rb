# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

PROFILE_PICS = [
  "http://pix.iemoji.com/images/emoji/apple/ios-9/256/grinning-face.png",
  "https://cdn-assets.insomniac.com/emoji_sexface.png",
  "http://pix.iemoji.com/images/emoji/apple/ios-9/256/flushed-face.png",
  "http://cdn.shopify.com/s/files/1/0185/5092/products/persons-0006.png?v=1369544093",
  "http://pix.iemoji.com/images/emoji/apple/ios-9/256/dog-face.png",
  "http://pix.iemoji.com/images/emoji/apple/ios-9/256/pouting-face.png",
  "http://cdn.playbuzz.com/cdn/ef15cfd0-01f0-466c-97b8-56adae1450bd/409312fb-e43e-42c9-a69c-7cdda7a76281.png",
  "http://pix.iemoji.com/images/emoji/apple/ios-9/256/sleeping-face.png",
  "http://pix.iemoji.com/images/emoji/apple/ios-9/256/smiling-face-with-smiling-eyes.png",
  "http://pix.iemoji.com/images/emoji/apple/ios-9/256/thumbs-up-sign.png"
]

User.destroy_all
Channel.destroy_all
ChannelMembership.destroy_all

guest = User.create!(username: "guest", email: "guest@gmail.com", password: "guestpassword", profile_pic_url: PROFILE_PICS[rand(0...10)])
channel0 = Channel.create!(title: "general", description: "first channel", user_id: guest.id)

user1 = User.create!(username: "user1", email: "user1@email.com", password: "password1", profile_pic_url: PROFILE_PICS[rand(0...10)])
user2 = User.create!(username: "user2", email: "user2@email.com", password: "password1", profile_pic_url: PROFILE_PICS[rand(0...10)])
user3 = User.create!(username: "user3", email: "user3@email.com", password: "password1", profile_pic_url: PROFILE_PICS[rand(0...10)])
user4 = User.create!(username: "wangytangyissocool", email: "user3@email.com", password: "password1", profile_pic_url: PROFILE_PICS[rand(0...10)])
user5 = User.create!(username: "dudeduderdue", email: "user3@email.com", password: "password1", profile_pic_url: PROFILE_PICS[rand(0...10)])
user6 = User.create!(username: "user6", email: "user3@email.com", password: "password1", profile_pic_url: PROFILE_PICS[rand(0...10)])
user7 = User.create!(username: "sdfadsasdf7", email: "user3@email.com", password: "password1", profile_pic_url: PROFILE_PICS[rand(0...10)])
user8 = User.create!(username: "whosthatguy8", email: "user3@email.com", password: "password1", profile_pic_url: PROFILE_PICS[rand(0...10)])
user9 = User.create!(username: "user9", email: "user3@email.com", password: "password1", profile_pic_url: PROFILE_PICS[rand(0...10)])
user10 = User.create!(username: "gretchweiners", email: "user3@email.com", password: "password1", profile_pic_url: PROFILE_PICS[rand(0...10)])

# CHANNELS
channel1 = Channel.create!(title: "work", description: "work only, no fun", user_id: guest.id)
channel2 = Channel.create!(title: "family", description: "the family's all here", user_id: guest.id)
channel3 = Channel.create!(title: "marketing dept", description: "yo", user_id: guest.id)
channel4 = Channel.create!(title: "private", description: "secured channel", user_id: guest.id)
channel6 = Channel.create!(title: "work mates", description: "social stuff", user_id: guest.id)
channel7 = Channel.create!(title: "friends", description: "drinking", user_id: guest.id)



ChannelMembership.create!(channel_id: channel0.id, member_id: guest.id)
ChannelMembership.create!(channel_id: channel0.id, member_id: user1.id)
ChannelMembership.create!(channel_id: channel0.id, member_id: user2.id)
ChannelMembership.create!(channel_id: channel0.id, member_id: user3.id)


ChannelMembership.create!(channel_id: channel6.id, member_id: user1.id)
ChannelMembership.create!(channel_id: channel6.id, member_id: user2.id)
ChannelMembership.create!(channel_id: channel7.id, member_id: user3.id)
