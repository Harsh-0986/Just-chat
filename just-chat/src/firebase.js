import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2XRTitKfZtgbdxmj_Ow6JMeYmJoMN11o",
  authDomain: "just-chat-30892.firebaseapp.com",
  projectId: "just-chat-30892",
  storageBucket: "just-chat-30892.appspot.com",
  messagingSenderId: "13743925213",
  appId: "1:13743925213:web:908531aba833ba04033834",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
