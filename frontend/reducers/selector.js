// rewrite to check if curentUser is a member of these channels?
//return array of channels or [];

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


// export const usersChannels = (state) => {
//   if (Object.keys(state.channels).length !== 0) {
//     let firstChannel = Object.values(state.channels)[0];
//     let filterChannels = [];
//     filterChannels.push(firstChannel);
//
//     Object.values(state.channels).slice(1).forEach((channel) => {
//       if (channel.user_id === state.session.currentUser.id) {
//         filterChannels.push(channel);
//       }
//     });
//     return filterChannels;
//   } else {
//     return [];
//   }
//   //return an array of channels matched by id
// };
