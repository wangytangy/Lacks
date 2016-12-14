export function fetchDirectMessages() {
  return $.ajax({
    method: "GET",
    url: '/api/channels/direct_messages'
  });
}

export function fetchAllUsers() {
  return $.ajax({
    method: "GET",
    url: '/api/users'
  });
}
