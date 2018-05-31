import firebase from 'firebase/app';
import 'firebase/database';
import config from './config.json';

const configDB = {
  apiKey: config.apiKey,
  authDomain: config.authDomain,
  databaseURL: config.databaseURL,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId
};

firebase.initializeApp(configDB);
const database = firebase.database();

export { firebase, database as default};
