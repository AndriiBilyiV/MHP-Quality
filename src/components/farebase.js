import { initializeApp } from 'firebase/app';
import {
  getDatabase,
  set,
  get,
  // update,
  // remove,
  ref,
  child,
} from 'firebase/database';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  // signOut,
  // onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAdMNQTsdWPlbiUWz1y9-92hZLDbKQHUBE',
  authDomain: 'quality-mhp.firebaseapp.com',
  databaseURL:
    'https://quality-mhp-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'quality-mhp',
  storageBucket: 'quality-mhp.appspot.com',
  messagingSenderId: '451738501502',
  appId: '1:451738501502:web:4ccae334bfb5a13f24332f',
};

initializeApp(firebaseConfig);

//Розділ запитів аутентифікації

const auth = getAuth();
const provider = new GoogleAuthProvider();

export const userSignIn = async () => {
  const response = await signInWithPopup(auth, provider)
    .then(result => result.user)
    .catch(err => err);
  return response;
};

// Розділ запитів бази даних

const db = getDatabase();

export const getAllUsers = async () => {
  const users = await get(child(ref(db), 'Users'))
    .then(res => res.val())
    .catch(err => console.log(err));
  return users;
};

export const insertDataPoit = data => {
  set(ref(db, 'Legko/crash/poins'), data);
};
export const insertDataRecord = data => {
  set(ref(db, 'Legko/crash/records'), data);
};
export const idetifyUser = async data => {
  const users = await getAllUsers();
  if (users === null) {
    set(ref(db, 'Users'), [data]);
  }
  if (!users.find(user => user.user === data.user)) {
    set(ref(db, 'Users'), [...users, data]);
  }
};
export const getAllDepartments = async company => {
  const departmens = await get(child(ref(db), `${company}/departments`))
    .then(res => res.val())
    .catch(err => console.log(err));
  return departmens;
};
export const setDepartment = async data => {
  const departmens = await getAllDepartments(data.company);
  if (departmens === null) {
    set(ref(db, `${data.company}/departments`), [data]);
    return;
  } else if (
    !departmens.find(
      departmen => departmen.departmentDisplay === data.departmentDisplay
    )
  ) {
    set(ref(db, `${data.company}/departments`), [...departmens, data]);
  }
};
export const getAllPositions = async company => {
  const positions = await get(child(ref(db), `${company}/positions`))
    .then(res => res.val())
    .catch(err => console.log(err));
  return positions;
};
export const setPosition = async data => {
  const positions = await getAllPositions(data.company);
  if (positions === null) {
    set(ref(db, `${data.company}/positions`), [data]);
    return;
  } else if (
    !positions.find(
      position => position.positionDisplay === data.positionDisplay
    )
  ) {
    set(ref(db, `${data.company}/positions`), [...positions, data]);
  }
};
