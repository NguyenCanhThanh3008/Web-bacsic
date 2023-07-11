import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyAFPOF8Y7DAqfzQ63pPkpQGILin5jWFV0M',
    authDomain: 'foodapp-f708d.firebaseapp.com',
    databaseURL: 'https://foodapp-f708d-default-rtdb.firebaseio.com',
    projectId: 'foodapp-f708d',
    storageBucket: 'foodapp-f708d.appspot.com',
    messagingSenderId: '21943670571',
    appId: '1:21943670571:web:567021f597ce49ec76176e',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
