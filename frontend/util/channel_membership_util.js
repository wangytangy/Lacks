export function createChannelMembership(channelID) {
  return $.ajax({
    method: "POST",
    url: `/api/channels/${channelID}/channel_memberships`
  });
}
