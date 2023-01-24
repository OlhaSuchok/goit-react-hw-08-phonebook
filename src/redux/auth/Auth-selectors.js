// import { createSelector } from '@reduxjs/toolkit';

// export const selectContacts = state => state.contacts.items;
// export const selectIsLoading = state => state.contacts.isLoading;
// export const selectError = state => state.contacts.error;
// export const selectContactsFilter = state => state.filter.filter;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectToken = state => state.auth.token;
export const selectisFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectContactsFilter],
//   (items, filter) => {
//     if (filter.trim() !== '') {
//       return items.filter(item =>
//         item.name.toLowerCase().includes(filter.toLowerCase())
//       );
//     }
//     return items;
//   }
// );

export const authSelectors = {
  selectIsLoggedIn,
  selectUserName,
};
