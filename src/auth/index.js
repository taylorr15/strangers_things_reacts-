export function storeCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
  
  export function getCurrentUser() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    return user ? ; //( wtite tenrnary for isLogged in (true or false)
  }
  
  export function clearCurrentUser() {
    localStorage.removeItem('currentUser');
  }