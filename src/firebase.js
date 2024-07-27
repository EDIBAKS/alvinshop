// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs,addDoc,doc,getDoc } from 'firebase/firestore/lite'
import { getStorage, uploadBytesResumable, getDownloadURL,ref } from "firebase/storage";
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOqb6M5BHKx7msDTqmztY-f1BgIM6i2JY",
  authDomain: "vueonlinestore-fd16e.firebaseapp.com",
  projectId: "vueonlinestore-fd16e",
  storageBucket: "vueonlinestore-fd16e.appspot.com",
  messagingSenderId: "941979578285",
  appId: "1:941979578285:web:ae4324ebce84186214bb24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth=getAuth(app)
export{db,doc,getDoc,collection,getDocs,addDoc,getStorage,ref, uploadBytesResumable, getDownloadURL,auth}