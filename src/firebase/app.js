export function logout() {
  firebase.auth().signOut();
}
