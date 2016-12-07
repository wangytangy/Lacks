@channels.each do |channel|
  json.set! channel.id do
    json.id channel.id
    json.title channel.title
    json.description channel.description
    json.user_id channel.id
  end
end
