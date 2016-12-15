# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.destroy_all

guest = User.create!(username: "guest", email: "guest@gmail.com", password: "guestpassword")
user1 = User.create!(username: "user1", email: "user1@email.com", password: "password1")
user2 = User.create!(username: "user2", email: "user2@email.com", password: "password1")
user3 = User.create!(username: "user3", email: "user3@email.com", password: "password1")
user4 = User.create!(username: "user4", email: "user3@email.com", password: "password1")
user5 = User.create!(username: "user5", email: "user3@email.com", password: "password1")
user6 = User.create!(username: "user6", email: "user3@email.com", password: "password1")
user7 = User.create!(username: "user7", email: "user3@email.com", password: "password1")
user8 = User.create!(username: "user8", email: "user3@email.com", password: "password1")
user9 = User.create!(username: "user9", email: "user3@email.com", password: "password1")
user10 = User.create!(username: "user10", email: "user3@email.com", password: "password1")


Channel.destroy_all
channel0 = Channel.create!(title: "general", description: "first channel", user_id: guest.id)
channel1 = Channel.create!(title: "work", description: "work only, no fun", user_id: guest.id)
channel2 = Channel.create!(title: "family", description: "the family's all here", user_id: guest.id)
channel3 = Channel.create!(title: "marketing dept", description: "yo", user_id: guest.id)
channel4 = Channel.create!(title: "private", description: "secured channel", user_id: guest.id)
channel6 = Channel.create!(title: "work mates", description: "social stuff", user_id: guest.id)
channel7 = Channel.create!(title: "friends", description: "drinking", user_id: guest.id)


channel8 = Channel.create!(title: "DM 1", description: "first DM", user_id: guest.id, direct_message_status: true)
channel9 = Channel.create!(title: "DM 2", description: "second DM", user_id: user1.id, direct_message_status: true)
channel10 = Channel.create!(title: "DM 3", description: "third DM", user_id: user1.id, direct_message_status: true)
#
# channel1 = Channel.create!(title: "first channel", description: "all convos", user_id: user1.id)
# channel2 = Channel.create!(title: "second channel", description: "family convos", user_id: user2.id)
# channel3 = Channel.create!(title: "third channel", description: "work convos", user_id: user3.id)


ChannelMembership.destroy_all
ChannelMembership.create!(channel_id: channel0.id, member_id: guest.id)
ChannelMembership.create!(channel_id: channel0.id, member_id: user1.id)
ChannelMembership.create!(channel_id: channel0.id, member_id: user2.id)
ChannelMembership.create!(channel_id: channel0.id, member_id: user3.id)


ChannelMembership.create!(channel_id: channel8.id, member_id: user1.id)
ChannelMembership.create!(channel_id: channel8.id, member_id: user2.id)
ChannelMembership.create!(channel_id: channel9.id, member_id: user3.id)
