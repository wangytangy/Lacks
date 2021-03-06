export const filterUsersChannels = (channels, currentUserID) => {
  let usersChannels = [];
  let allChannels = Object.values(channels);

  if (allChannels.length > 0) {
    allChannels.forEach((channel) => {
      if (isMember(channel, currentUserID) && !channel.directMessageStatus) {

        usersChannels.push(channel);
      }
    });
  }
  return usersChannels;
};

function isMember(channel, currentUserID) {
  let bool = false;

  channel.members.forEach((user) => {
    if (user.id === currentUserID) {
      bool = true;
      return;
    }
  });
  return bool;
}

export const usersDirectMessagesToArray = (channels) => {
  return Object.values(channels);
};
