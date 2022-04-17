// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

//---------

const firebaseConfig = {
  apiKey: "AIzaSyCoB_kh1uSibDdbWjGTnevJQnQsN3izy9U",
  authDomain: "genius-car-services-f8f4c.firebaseapp.com",
  projectId: "genius-car-services-f8f4c",
  storageBucket: "genius-car-services-f8f4c.appspot.com",
  messagingSenderId: "405797430900",
  appId: "1:405797430900:web:6723ee94a8516b4346d321",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
