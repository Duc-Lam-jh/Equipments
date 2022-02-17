export const saveUserToBrowser = (userData) => {
  localStorage.setItem("userEmail", userData.email);
  localStorage.setItem("userRole", userData.role);
  localStorage.setItem("userId", userData.id);
  localStorage.setItem("userName", userData.name);
}

export const getUserFromBrowser = () => {
  const userEmail = localStorage.getItem("userEmail");
  const userRole = localStorage.getItem("userRole");
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("userName");
  
  if(userEmail) {
    return {
      email: userEmail,
      role: userRole,
      id: userId,
      name: userName
    } 
  }
}

export const calculateNumberOfPages = (numberOfItems, itemsPerPage) => {
  const numberOfPages = numberOfItems / itemsPerPage;
  if (numberOfItems % numberOfPages !== 0){
    return Number.parseInt(numberOfPages) + 1;
  }
  return Number.parseInt(numberOfPages);
}