# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
profile_pic_url | string    |

## messages
column name | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
body                | text      | not null
author_id           | integer   | not null, foreign key (references users), indexed
channel_id          | integer   | not null, foreign key (references channels or DM), indexed
image_file_name     | string    |
giphy_url           | string    |

## channels
column name | data type | details
------------|-----------|-----------------------
id                    | integer   | not null, primary key
title                 | string    | not null
description           | text      |
user_id               | integer   | not null, foreign key (references users), indexed
direct_message_status | boolean   | not null, default: false


## channel_memberships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
channel_id  | integer   | not null, foreign key (references channels), indexed
member_id   | integer   | not null, foreign key (references users), indexed
