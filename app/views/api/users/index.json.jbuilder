json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.profilePicUrl user.profile_pic_url
end
