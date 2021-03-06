@messages.each do |message|
  json.set! message.id do
    json.id message.id
    json.body message.body
    json.author_id message.author.id
    json.author message.author.username
    json.channelID message.channel_id
    json.createdAt format_date(message.created_at)
    json.imageUrl asset_path(message.image.url)
    json.giphyUrl message.giphy_url
    json.profilePicUrl message.author.profile_pic_url
    json.avatar asset_path(message.author.avatar.url)
  end
end
