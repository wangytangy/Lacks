json.extract! channel, :id, :title, :description, :user_id
json.creator channel.user
json.memberCount channel.users.length
