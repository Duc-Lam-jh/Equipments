export const getUserFromBrowser = () => {
  const userEmail = localStorage.getItem("userEmail");
  const userRole = localStorage.getItem("userRole");
  const userId = localStorage.getItem("userId");

  if(userEmail && userRole && userId) {
    return {
      email: userEmail,
      role: userRole,
      id: userId
    } 
  }
}