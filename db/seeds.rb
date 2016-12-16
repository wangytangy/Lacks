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
20.times do
  all_users << User.create!(
    username: Faker::Internet.user_name,
    email: Faker::Internet.email,
    password: "password1",
    profile_pic_url: Faker::Avatar.image(Faker::Name.first_name, "50x50"))
end



# CHANNELS

Channel.destroy_all
all_channels = [
  general = Channel.create!(title: "general", description: "This channel is for general discussion", user_id: admin.id),
  channel1 = Channel.create!(title: "2016-10-17 NYC", description: "the best cohort", user_id: admin.id),
  channel2 = Channel.create!(title: "Snack", description: "chat group about snacks", user_id: admin.id),
  channel3 = Channel.create!(title: "MapMyTrot", description: "we're not horsing around", user_id: admin.id),
  channel4 = Channel.create!(title: "Slack", description: "A messaging app for teams", user_id: admin.id),
  channel5 = Channel.create!(title: "goodBooks", description: "check out these books", user_id: admin.id),
  channel6 = Channel.create!(title: "Chat Academy", description: "serious coders only", user_id: admin.id),
  channel7 = Channel.create!(title: "2016-09-12 SF", description: "doing stuff in SF", user_id: admin.id),
  channel8 = Channel.create!(title: "Spadebook", description: "a chat group for shovel enthusiasts", user_id: admin.id),
  channel9 = Channel.create!(title: "FrugalSheets", description: "most reputable app in the world", user_id: admin.id)
]

ChannelMembership.destroy_all

# join "admin" to all the channels created by her/him
all_channels.each do |channel|
  ChannelMembership.create!(member_id: admin.id, channel_id: channel.id)
end

# join all users to "general" channel
all_users.each do |user|
  ChannelMembership.create!(member_id: user.id, channel_id: general.id)
end


#grab some users and join them to some channels
all_users[0..2].each do |user|
  ChannelMembership.create!(member_id: user.id, channel_id: channel1.id)
end

all_users[3..5].each do |user|
  ChannelMembership.create!(member_id: user.id, channel_id: channel3.id)
end

all_users[6..8].each do |user|
  ChannelMembership.create!(member_id: user.id, channel_id: channel5.id)
end

all_users[9..11].each do |user|
  ChannelMembership.create!(member_id: user.id, channel_id: channel7.id)
end



#grab samples of users and join them to random DM's
dm1_title = all_users[19].username + "," + all_users[18].username + "," + all_users[17].username
dm1 = Channel.create!(
  title: dm1_title,
  description: "",
  direct_message_status: true,
  user_id: all_users[16].id
)
ChannelMembership.create!(member_id: all_users[19].id, channel_id: dm1.id)
ChannelMembership.create!(member_id: all_users[18].id, channel_id: dm1.id)
ChannelMembership.create!(member_id: all_users[17].id, channel_id: dm1.id)
ChannelMembership.create!(member_id: all_users[16].id, channel_id: dm1.id)

dm2_title = all_users[15].username + "," + all_users[14].username + "," + all_users[13].username
dm2 = Channel.create!(
  title: dm2_title,
  description: "",
  direct_message_status: true,
  user_id: all_users[12].id
)
ChannelMembership.create!(member_id: all_users[15].id, channel_id: dm2.id)
ChannelMembership.create!(member_id: all_users[14].id, channel_id: dm2.id)
ChannelMembership.create!(member_id: all_users[13].id, channel_id: dm2.id)
ChannelMembership.create!(member_id: all_users[12].id, channel_id: dm2.id)


dm3_title = all_users[11].username + "," + all_users[10].username + "," + all_users[9].username
dm3 = Channel.create!(
  title: dm3_title,
  description: "",
  direct_message_status: true,
  user_id: all_users[8].id
)
ChannelMembership.create!(member_id: all_users[11].id, channel_id: dm3.id)
ChannelMembership.create!(member_id: all_users[10].id, channel_id: dm3.id)
ChannelMembership.create!(member_id: all_users[9].id, channel_id: dm3.id)
ChannelMembership.create!(member_id: all_users[8].id, channel_id: dm3.id)

dm4_title = all_users[7].username + "," + all_users[6].username + "," + all_users[5].username
dm4 = Channel.create!(
  title: dm4_title,
  description: "",
  direct_message_status: true,
  user_id: all_users[4].id
)
ChannelMembership.create!(member_id: all_users[7].id, channel_id: dm3.id)
ChannelMembership.create!(member_id: all_users[6].id, channel_id: dm3.id)
ChannelMembership.create!(member_id: all_users[5].id, channel_id: dm3.id)
ChannelMembership.create!(member_id: all_users[4].id, channel_id: dm3.id)
