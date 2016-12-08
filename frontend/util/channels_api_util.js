export function fetchChannels() {
  return $.ajax({
    method: "GET",
    url: "/api/channels"
  });
}

export function createChannel(channel) {
  return $.ajax({
    method: "POST",
    url: "/api/channels",
    data: { channels: channel }
  });
}
