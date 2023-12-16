
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyD8h6vJQLKGhD8W0UIAZey6wRw9X-j1dCI",
  authDomain: "rohit-personal-website-42e45.firebaseapp.com",
  databaseURL: "https://rohit-personal-website-42e45-default-rtdb.firebaseio.com",
  projectId: "rohit-personal-website-42e45",
  storageBucket: "rohit-personal-website-42e45.appspot.com",
  messagingSenderId: "629021900495",
  appId: "1:629021900495:web:1265c40779c089512dc1ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
const db = getFirestore(app)

export default {storage, db, app}