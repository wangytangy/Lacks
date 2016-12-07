# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.destroy_all

User.create!(username: "user1", email: "user1@email.com", password: "password1")
User.create!(username: "user2", email: "user2@email.com", password: "password2")
User.create!(username: "user3", email: "user3@email.com", password: "password3")
User.create!(username: "guest", email: "guest@gmail.com", password: "guestpassword")
