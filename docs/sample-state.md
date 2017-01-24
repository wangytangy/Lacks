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
      id: 1,
      title: "sample channel title"
      members: [
        { id: 1, username: "wangytangy" },
        { id: 2, username: "other_user" },
        { id: 3, username: "third_user" },
        { id: 4, username: "fourth_user" }
      ]
    },
    2: {
      id: 2,
      title: "second channel"
      members: [
        { id: 3, username: "third_user" },
        { id: 4, username: "fourth_user" }
      ]
    }
  },

  currentChannel: {
    { id: 1,
      title: "sample channel title",
      description: "this is the current channel"
    }
  },

  messages: {
    1: {
      user_id: 1,
      body: "this is my first message",
      image_file_name: null,
      giphy_url: null
    }
  }
}
