// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/auth";
// import "firebase/firestore";
import "firebase/database";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const devConfig = {
  apiKey: "AIzaSyBJ6S4fn_-fIM8lDsQYosCXlmZ9TWdz2iw",
  authDomain: "geosys-case.firebaseapp.com",
  databaseURL: "https://geosys-case-default-rtdb.firebaseio.com",
  projectId: "geosys-case",
  storageBucket: "geosys-case.appspot.com",
  messagingSenderId: "819375720305",
  appId: "1:819375720305:web:42adce5cab651fcd8498d0",
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
};
// const prodConfig = {};
// const firebaseConfig = process.env.NODE_ENV === "development" ? devConfig : prodConfig;
firebase.initializeApp(devConfig);
export default firebase;
