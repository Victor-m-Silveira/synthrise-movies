// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcphtZv8b7iJvqA2wl4AhR8OeLDL-LKZY",
  authDomain: "synthrisemovies.firebaseapp.com",
  projectId: "synthrisemovies",
  storageBucket: "synthrisemovies.appspot.com",
  messagingSenderId: "169529892721",
  appId: "1:169529892721:web:4030738dc486c62645a0d0",
  measurementId: "G-W5QMXMYJSZ"
}; 
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
