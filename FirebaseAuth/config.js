import * as firebase from "firebase";
 var firebaseConfig = {
    apiKey: "AIzaSyAc2RXJqDRBBADabkxlnU4OwRFbY1-18IU",
    authDomain: "firstfirebase-aa2a3.firebaseapp.com",
    projectId: "firstfirebase-aa2a3",
    storageBucket: "firstfirebase-aa2a3.appspot.com",
    messagingSenderId: "1030738242390",
    appId: "1:1030738242390:web:00e6c59fe3ba02794ec4f7"
  };

  export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();