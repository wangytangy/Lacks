@messages.each do |message|
  json.set! message.id do
    json.id message.id
    json.body message.body
    json.author_id message.author.id
    json.author message.author.username
    json.channelID message.channel_id
    json.createdAt format_date(message.created_at)
  end
end
