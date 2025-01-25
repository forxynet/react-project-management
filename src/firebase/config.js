import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// put your config below
// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: ""
// };

const firebaseConfig = {
  apiKey: "AIzaSyBn_Dsj85etLz_8sjKr1qLQCbwrSPeOmFI",
  authDomain: "thedojosite-96eec.firebaseapp.com",
  projectId: "thedojosite-96eec",
  storageBucket: "thedojosite-96eec.firebasestorage.app",
  messagingSenderId: "295968290407",
  appId: "1:295968290407:web:a575f9fc75c8318ceec6c2"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }