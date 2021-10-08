import firebase from "firebase/";

const firebaseConfig = {
  apiKey: "AIzaSyDNADVk_54dslfeF5hqUtoWSe2eMQops6Y",
  authDomain: "slack-clone-a0c84.firebaseapp.com",
  databaseURL: "https://slack-clone-a0c84-default-rtdb.firebaseio.com",
  projectId: "slack-clone-a0c84",
  storageBucket: "slack-clone-a0c84.appspot.com",
  messagingSenderId: "554298543089",
  appId: "1:554298543089:web:43d252f74a24f93dc45250"
};

// connect it all
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); // authentication

export { auth, provider };
export default db;
