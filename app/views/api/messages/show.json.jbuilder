json.set! :id, @message.id
json.set! :body, @message.body
json.set! :author_id, @message.author_id
json.set! :author, @message.author.username
json.set! :channelID, @message.channel_id
