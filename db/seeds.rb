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
user2 = User.create!(username: "user2", email: "user2@email.com", password: "password2")
user3 = User.create!(username: "user3", email: "user3@email.com", password: "password3")


Channel.destroy_all
channel0 = Channel.create!(title: "general", description: "first channel", user_id: guest.id)
# 
# channel1 = Channel.create!(title: "first channel", description: "all convos", user_id: user1.id)
# channel2 = Channel.create!(title: "second channel", description: "family convos", user_id: user2.id)
# channel3 = Channel.create!(title: "third channel", description: "work convos", user_id: user3.id)


ChannelMembership.destroy_all

ChannelMembership.create!(channel_id: channel0.id, member_id: guest.id)
ChannelMembership.create!(channel_id: channel0.id, member_id: user1.id)
ChannelMembership.create!(channel_id: channel0.id, member_id: user2.id)
ChannelMembership.create!(channel_id: channel0.id, member_id: user3.id)
