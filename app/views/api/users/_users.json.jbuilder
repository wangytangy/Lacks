json.set! :id, user.id
json.set! :username, user.username
json.set! :email, user.email
json.set! :profile_pic_url, user.profile_pic_url
json.set! :avatarUrl, asset_path(user.avatar.url)
