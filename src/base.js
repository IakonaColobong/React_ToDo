import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseApp = firebase.initializeApp({

    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID 
    apiKey: "AIzaSyAb6Gt-g2VVtC3isp3Z9jb75XyWb0HhT4s",
    authDomain: "reacttodo-6e5f8.firebaseapp.com",
    projectId: "reacttodo-6e5f8",
    storageBucket: "reacttodo-6e5f8.appspot.com",
    messagingSenderId: "15794686602",
    appId: "1:15794686602:web:94dd8cdadc7f969f25bb73"


})
export const authResult = firebase.auth();
export default firebaseApp;
