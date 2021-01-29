import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBKYpI85_89rm4uEAxZA1F2K-SCXe6T3jo",
  authDomain: "upwork-test-d26b5.firebaseapp.com",
  projectId: "upwork-test-d26b5",
  storageBucket: "upwork-test-d26b5.appspot.com",
  messagingSenderId: "701158488554",
  appId: "1:701158488554:web:b235525002dee0b26eda93",
};
// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export default firebase;
