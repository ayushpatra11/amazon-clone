import firebase from 'firebase/app';
import 'firebase/auth';


const config={
  apiKey: "AIzaSyCj3Fo-kOC2G7rnM69EovEU-uLS4jd2Ve0",
  authDomain: "clone-fe7de.firebaseapp.com",
  projectId: "clone-fe7de",
  storageBucket: "clone-fe7de.appspot.com",
  messagingSenderId: "427661186390",
  appId: "1:427661186390:web:ae54b15b30cfb13239f2f7",
  measurementId: "G-WXJB278PNB"
};

const app = firebase.initializeApp(config);

const auth=app.auth();

export default auth;
// apiKey: process.env.REACT_APP_FB_APIKEY,
// authDomain: process.env.REACT_APP_FB_AUTHDOMAIN,
// projectId: process.env.REACT_APP_FB_PROJECTID,
// storageBucket:process.env.REACT_APP_FB_STORAGEBUCKET,
// messagingSenderId: process.env.REACT_APP_FB_MESSAGINGSENDERID,
// appId: process.env.REACT_APP_FB_APPID,
// measurementId: process.env.REACT_APP_FB_MEASUREMENTID