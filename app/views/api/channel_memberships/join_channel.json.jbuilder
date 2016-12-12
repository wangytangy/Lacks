json.extract! @channel, :id, :title, :description, :user_id
json.members @channel.users
json.memberCount @channel.users.length
json.creator @channel.user

# @joined_channels.each do |channel|
#   json.set! channel.id do
#     json.id channel.id
#     json.title channel.title
#     json.description channel.description
#     json.user_id channel.user_id
#     json.members channel.users
#     json.creator channel.user
#   end
# end
