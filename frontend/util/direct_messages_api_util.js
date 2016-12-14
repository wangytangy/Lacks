export function fetchDirectMessages() {
  return $.ajax({
    method: "GET",
    url: '/api/channels/direct_messages'
  });
}
