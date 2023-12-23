export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user;
export const selectPosition = state => state.auth.position;
export const selectPositionDisplay = state => state.auth.positionDisplay;
export const selectIdentify = state => state.auth.isIdentify;
export const selectEmail = state => state.auth.email;
export const selectCompany = state => state.auth.company;
export const selectUser = state => state.auth.UID;
export const selectAdmin = state => state.auth.isAdmin;
export const selectUsersArray = state => state.auth.usersArray;
export const selectDepartments = state => state.company.departments;
export const selectPositions = state => state.company.positions;
export const selectAreas = state => state.company.areas;
