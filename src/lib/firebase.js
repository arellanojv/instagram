import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDXb8bX0q5zckpmf0QVU4ypy8s4SJ7BPZo',
  authDomain: 'instagram-59ef1.firebaseapp.com',
  projectId: 'instagram-59ef1',
  storageBucket: 'instagram-59ef1.appspot.com',
  messagingSenderId: '448752495306',
  appId: '1:448752495306:web:ac13edd0210fb195f02233'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
