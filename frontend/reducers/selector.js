export const usersChannels = (state) => {

  if (Object.keys(state.channels).length !== 0) {
    let firstChannel = Object.values(state.channels)[0];
    let filterChannels = [];
    Object.values(state.channels).forEach((channel) => {
      if (channel.user_id === state.session.currentUser.id) {
        filterChannels.push(channel);
      }
    });
    filterChannels.push(firstChannel);
    return filterChannels;
  } else {
    return [];
  }
  //return an array of channels matched by id
};
