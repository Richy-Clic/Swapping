import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCSZ3U6ROxkIL8oxRKnsAhuvDtlA48ftXo",
    authDomain: "swapping-e4666.firebaseapp.com",
    projectId: "swapping-e4666",
    storageBucket: "swapping-e4666.appspot.com",
    messagingSenderId: "39520573987",
    appId: "1:39520573987:web:b6266e5a128adf6f3aef96",
    measurementId: "G-NRDJXWL75F"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
