export function updateUserInfo(profileData) {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${profileData}`,
    data: {  }
  });
}
