json.set! :id, @message.id
json.set! :body, @message.body
json.set! :author_id, @message.author_id
json.set! :author, @message.author.username
json.set! :channelID, @message.channel_id
json.set! :createdAt, format_date(@message.created_at)
json.set! :imageUrl, asset_path(@message.image.url)
json.set! :giphyUrl, @message.giphy_url


#@message.image.url
