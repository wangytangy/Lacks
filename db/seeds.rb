# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.destroy_all

admin = User.create!(username: "admin", email: "admin@yamail.com", password: "password1", profile_pic_url: Faker::Avatar.image("admin", "50x50"))
guest = User.create!(username: "guest", email: "guest@gmail.com", password: "guestpassword", profile_pic_url: Faker::Avatar.image("guest", "50x50"))


all_users = []
all_users << guest
all_users << admin
20.times do
  all_users << User.create!(
    username: Faker::Internet.user_name,
    email: Faker::Internet.email,
    password: "password1",
    profile_pic_url: Faker::Avatar.image(Faker::Name.first_name, "50x50"))
end



# CHANNELS
Channel.destroy_all

general = Channel.create!(title: "general", description: "This channel is for general discussion", user_id: admin.id)
channel1 = Channel.create!(title: Faker::Address.country, description: Faker::Hipster.sentence, user_id: guest.id)
channel2 = Channel.create!(title: Faker::Address.country, description: Faker::Hipster.sentence, user_id: guest.id)
channel3 = Channel.create!(title: Faker::Address.country, description: Faker::Hipster.sentence, user_id: guest.id)
channel4 = Channel.create!(title: Faker::Address.country, description: Faker::Hipster.sentence, user_id: guest.id)
channel5 = Channel.create!(title: Faker::Address.country, description: Faker::Hipster.sentence, user_id: guest.id)
channel6 = Channel.create!(title: Faker::Address.country, description: Faker::Hipster.sentence, user_id: guest.id)
channel7 = Channel.create!(title: Faker::Address.country, description: Faker::Hipster.sentence, user_id: guest.id)
channel8 = Channel.create!(title: Faker::Address.country, description: Faker::Hipster.sentence, user_id: guest.id)
channel9 = Channel.create!(title: Faker::Address.country, description: Faker::Hipster.sentence, user_id: guest.id)
channel10 = Channel.create!(title: Faker::Address.country, description: Faker::Hipster.sentence, user_id: guest.id)

ChannelMembership.destroy_all

# join all users to "general" channel
all_users.each do |user|
  ChannelMembership.create!(member_id: user.id, channel_id: general.id)
end







#grab samples of users and join them to random channels


#grab samples of users and join them to random DM's


# ChannelMembership.create!(channel_id: channel0.id, member_id: guest.id)
# ChannelMembership.create!(channel_id: channel0.id, member_id: user1.id)
# ChannelMembership.create!(channel_id: channel0.id, member_id: user2.id)
# ChannelMembership.create!(channel_id: channel0.id, member_id: user3.id)
#
#
# ChannelMembership.create!(channel_id: channel6.id, member_id: user1.id)
# ChannelMembership.create!(channel_id: channel6.id, member_id: user2.id)
# ChannelMembership.create!(channel_id: channel7.id, member_id: user3.id)
