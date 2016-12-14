@direct_messages.each do |channel|
  json.set! channel.id do
    json.id channel.id
    json.title channel.title
    json.description channel.description
    json.user_id channel.user_id
    json.members channel.users
    json.memberCount calculate_members(channel)
    json.creator channel.user
    json.directMessageStatus channel.direct_message_status
  end
end
