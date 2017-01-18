# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170118210519) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channel_memberships", force: :cascade do |t|
    t.integer  "channel_id", null: false
    t.integer  "member_id",  null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "channel_memberships", ["channel_id", "member_id"], name: "index_channel_memberships_on_channel_id_and_member_id", unique: true, using: :btree

  create_table "channels", force: :cascade do |t|
    t.string   "title",                                 null: false
    t.text     "description"
    t.integer  "user_id",                               null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "direct_message_status", default: false, null: false
  end

  add_index "channels", ["title"], name: "index_channels_on_title", unique: true, using: :btree
  add_index "channels", ["user_id"], name: "index_channels_on_user_id", using: :btree

  create_table "messages", force: :cascade do |t|
    t.text     "body"
    t.integer  "author_id",          null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "channel_id",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.string   "giphy_url"
  end

  add_index "messages", ["author_id"], name: "index_messages_on_author_id", using: :btree
  add_index "messages", ["channel_id"], name: "index_messages_on_channel_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",            null: false
    t.string   "email"
    t.string   "password_digest",     null: false
    t.string   "session_token",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "profile_pic_url"
    t.string   "avatar_file_name"
    t.string   "avatar_content_type"
    t.integer  "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

  add_foreign_key "messages", "channels"
end
