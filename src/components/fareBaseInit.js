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
  if (!users.find(user => user.user === data.user)) {
    set(ref(db, 'Users'), [...users, data]);
  }
};
export const setUser = () => {
  set(ref(db, 'Users'), [
    { user: 'Qj8RMVY0s0gMheXOe1HkamSXE4K3', company: 'Legko', type: 'Admin' },
  ]);
};
