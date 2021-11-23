import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAzDkmHzWeKNco53sifExgAqzgQmInmHU",
  authDomain: "netflix-clone-3344f.firebaseapp.com",
  projectId: "netflix-clone-3344f",
  storageBucket: "netflix-clone-3344f.appspot.com",
  messagingSenderId: "306834330119",
  appId: "1:306834330119:web:b885c6f5bee1f7dc7290a2"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();

export {auth}
export default db;