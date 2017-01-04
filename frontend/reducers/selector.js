export const usersChannels = (state) => {
  if (Object.keys(state.channels).length !== 0) {

    let filterChannels = [];
    Object.values(state.channels).forEach((channel) => {
      channel.members.forEach((member) => {
        if (member.id === state.session.currentUser.id) {
          filterChannels.push(channel);
        }
      });
    });
    return filterChannels;
  } else {
    return [];
  }
};
