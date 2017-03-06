export function signup(user) {
  return $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user: user }
  });
}

export function login(user) {
  return $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user: user }
  });
}

export function logout() {
  return $.ajax({
    method: "DELETE",
    url: "/api/session"
  });
}

export function updateProfilePic(imageData) {
  console.log(imageData)
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${userID}`,
    data: {
      user:
    }
  });
};
