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
channel_id          | integer   | not null, foreign key (references channels), indexed
direct_message_id   | integer   | not null, foreign key (references direct_messages), indexed
archived            | boolean   | not null, default: false

## channels
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      |
member_count| integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed

## channel_subscriptions
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
channel_id      | string    | not null, indexed
member_id       | string    | not null, indexed (channel_id and member_id pairings need to be unique)

## direct_messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      |
member_count| integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed

## direct_messages_subcriptions
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
DM_id           | integer   | not null, indexed
member_id       | integer   | not null, indexed  (DM_id and member_id pairings need to be unique)
