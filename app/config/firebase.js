import * as firebase from 'firebase';

const configurationOptions = {
  apiKey: 'AIzaSyDOQziR_0M-2IpRyf7bjnkxWugSA8wfS70',
  authDomain: 'mongolianscript.firebaseapp.com',
  databaseURL: 'https://mongolianscript.firebaseio.com',
  projectId: 'mongolianscript',
  storageBucket: 'mongolianscript.appspot.com',
  messagingSenderId: '627755073252',
};

const Database = firebase.initializeApp(configurationOptions);

export { Database };
