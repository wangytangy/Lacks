export function fetchChannels() {
  return $.ajax({
    method: "GET",
    url: "/api/channels"
  });
}
