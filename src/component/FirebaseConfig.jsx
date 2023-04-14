// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBruNKDTu9GaI-DPxk_HCmKBvzHfXYRWQE",
  authDomain: "react-project-634fd.firebaseapp.com",
  projectId: "react-project-634fd",
  storageBucket: "react-project-634fd.appspot.com",
  messagingSenderId: "268851288464",
  appId: "1:268851288464:web:309a316ccda3f3f6c5fb15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const DB = getFirestore(app);

// export default DB;