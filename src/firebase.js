import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: 'AIzaSyBqspDfvd9jBJ22MFq4HaM0LZ43Z8E5nmI',
    authDomain: 'twitter-clone-30ff8.firebaseapp.com',
    projectId: 'twitter-clone-30ff8',
    storageBucket: 'twitter-clone-30ff8.appspot.com',
    messagingSenderId: '701418706122',
    appId: '1:701418706122:web:270e23c55fb059223d5033',
    measurementId: 'G-ZKZPBFXKYE',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore() //accessing database
const auth = firebase.auth() //for authentication
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
