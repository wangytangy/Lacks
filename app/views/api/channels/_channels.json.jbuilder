json.extract! channel, :id, :title, :description, :user_id, :direct_message_status
json.creator channel.user
json.memberCount channel.users.length
json.createdAt format_channel_date(channel.created_at)
