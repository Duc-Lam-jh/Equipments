export const isUserLoggedIn = () => {
  const userEmail = localStorage.getItem("userEmail");
  const userRole = localStorage.getItem("userRole");

  if(!userEmail || !userRole) {
    return false;
  } else {
    return {
      email: userEmail,
      role: userRole
    }
  }
}