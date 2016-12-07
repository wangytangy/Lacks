```js
{
  session: {
      currentUser: {
        id: 1,
        username: wangytangy
      },
      errors: ["Invalid credentials"]
    }
  },
  channels: {
    1: {
      title: "sample channel title",
      user_id: 1,
      members: [
        { id: 1, username: "wangytangy" },
        { id: 2, username: "other_user" },
        { id: 3, username: "third_user" },
        { id: 4, username: "fourth_user" }
      ],
    }
  },
  directMessages: {
    1: {
      title: "sample DM title",
      members: [
        { id: 1, username: "wangytangy" },
        { id: 2, username: "other_user" }
      ]
    }
  },
  messages: {
    1: {
      user_id: 1,
      body: "this is my first message",
      messageable_id: 1
      messageable_type: "channel"
    }
  }
}
