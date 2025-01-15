import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDhBK2TeNcfos7xnMWhmCEBPf4Fwk3-S6M",
  authDomain: "react-management-app-ea9d1.firebaseapp.com",
  projectId: "react-management-app-ea9d1",
  storageBucket: "react-management-app-ea9d1.firebasestorage.app",
  messagingSenderId: "314203444206",
  appId: "1:314203444206:web:a2420a91b24bef5c41b4ff"
};
// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }