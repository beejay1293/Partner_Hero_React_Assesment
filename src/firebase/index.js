import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/remote-config';


import config from './config';
firebase.initializeApp(config);

const db = firebase.firestore();

export { db };
