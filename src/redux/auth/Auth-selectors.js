export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectToken = state => state.auth.token;
export const selectisFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;

export const authSelectors = {
  selectIsLoggedIn,
  selectUserName,
};
