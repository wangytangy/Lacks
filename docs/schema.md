# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## messages
column name | data type | details
--------------------|-----------|-----------------------
id                  | integer   | not null, primary key
body                | text      | not null
author_id           | integer   | not null, foreign key (references users), indexed
messageable_id      | integer   | not null, foreign key (references channels or DM), indexed
messageable_type    | string    | not null, (references "channel" or "direct_messages")


## channels
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      |
author_id   | integer   | not null, foreign key (references users), indexed

## channel_memberships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
channel_id  | integer   | not null, foreign key (references channels), indexed
member_id   | integer   | not null, foreign key (references users), indexed



## direct_messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      |
author_id   | integer   | not null, foreign key (references users), indexed

## direct_messages_memberships

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
direct_message_id       | integer   | not null, foreign key (references DMs), indexed
member_id   | integer   | not null, foreign key (references users), indexed
