import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB8Bo8dP-17ser5he63bHLS6dFRanXTU6c",
  authDomain: "thedojosite-b9d77.firebaseapp.com",
  projectId: "thedojosite-b9d77",
  storageBucket: "thedojosite-b9d77.firebasestorage.app",
  messagingSenderId: "27232498956",
  appId: "1:27232498956:web:61a3cfdada36bd09c20529"
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