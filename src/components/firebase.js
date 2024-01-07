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
  signOut,
  // onAuthStateChanged,
} from 'firebase/auth';
import { nanoid } from 'nanoid';

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
  const users = await getAllUsers();

  return { user: response, users: users };
};
export const userSignOut = async () => {
  const response = await signOut()
    .then()
    .catch(err => err);
  console.log(response);
};
// Розділ запитів бази даних

const db = getDatabase();

export const getAllUsers = async () => {
  const users = await get(child(ref(db), 'Users'))
    .then(res => res.val())
    .catch(err => console.log(err));
  return users;
};
export const idetifyUser = async data => {
  const users = await getAllUsers();
  if (users === null) {
    set(ref(db, 'Users'), [data]);
  }
  if (!users.find(user => user.user === data.user)) {
    set(ref(db, 'Users'), [...users, data]);

    return data;
  } else if (users.find(user => user.user === data.user)) {
    return data;
  }
};
export const getAllDepartments = async company => {
  const response = await get(child(ref(db), `${company}/departments`))
    .then(res => res.val())
    .catch(err => console.log(err));
  if (response && typeof response === 'object') {
    const departments = Object.entries(response).map(item => item[1]);
    return departments;
  }
};
export const setDepartment = async data => {
  const departments = await getAllDepartments(data.company);

  if (departments) {
    if (
      departments.find(department => department.department === data.department)
    ) {
      alert('same');
      return;
    }
  }
  set(ref(db, `${data.company}/departments/` + data.id), data);
};
export const getAllPositions = async company => {
  const response = await get(child(ref(db), `${company}/positions`))
    .then(res => res.val())
    .catch(err => console.log(err));
  if (response && typeof response === 'object') {
    const positions = Object.entries(response).map(item => item[1]);
    return positions;
  }
};
export const setPosition = async data => {
  const positions = await getAllPositions(data.company);
  if (positions) {
    if (positions.find(position => position.position === data.position)) {
      alert('same');
      return;
    }
  }

  set(ref(db, `${data.company}/positions/` + nanoid()), data);
};
export const getAllAreas = async company => {
  const areas = await get(child(ref(db), `${company}/areas`))
    .then(res => res.val())
    .catch(err => console.log(err));
  return areas;
};
export const setArea = async data => {
  const areas = await getAllAreas(data.company);
  if (areas === null) {
    set(ref(db, `${data.company}/areas`), [data]);
    return;
  } else if (!areas.find(area => area.area === data.area)) {
    set(ref(db, `${data.company}/areas`), [...areas, data]);
  }
};
export const getAllCrashPoints = async company => {
  const points = await get(child(ref(db), `${company}/crash/poins`))
    .then(res => res.val())
    .catch(err => console.log(err));
  return points;
};
export const setCrashPoint = async data => {
  set(ref(db, `${data.company}/crash/poins/${data.id}/`), data);
};
export const setCrashRecord = data => {
  set(
    ref(
      db,
      `Legko/crash/records/${data.year}/${data.month}/${data.id}/` + data.day
    ),
    {
      status: data.status,
      redactor: data.redactor,
      date: data.date,
      time: data.time,
    }
  );
  set(
    ref(db, `Legko/crash/records/${data.year}/${data.month}/${data.id}/area`),
    data.area
  );
  set(
    ref(
      db,
      `Legko/crash/records/${data.year}/${data.month}/${data.id}/display`
    ),
    data.display
  );
};

export const getRecords = async ({ year, month }) => {
  const records = await get(
    child(ref(db), `Legko/crash/records/${year}/${month}`)
  )
    .then(res => res.val())
    .catch(err => console.log(err));
  return records;
};
