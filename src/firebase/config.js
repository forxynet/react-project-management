import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDDAJqhdWXeNoQ2iCl5_9YVnETmE9qlXFc",
  authDomain: "react-project-management-5516d.firebaseapp.com",
  projectId: "react-project-management-5516d",
  storageBucket: "react-project-management-5516d.firebasestorage.app",
  messagingSenderId: "1029543861192",
  appId: "1:1029543861192:web:7a430e9a81f08bb9bb3efd"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
