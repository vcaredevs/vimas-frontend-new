


export function getOrCreateAuthUserId() {
 
  const backendUserId = localStorage.getItem("user_id");
  if (backendUserId) {
    return atob(backendUserId); 
  }


  let guestId = localStorage.getItem("auth_user_id");

  if (!guestId) {
    guestId = "AUTH_" + crypto.randomUUID();
    localStorage.setItem("auth_user_id", guestId);
  }

  return guestId;
}
