var firebaseConfig = {
  apiKey: "AIzaSyC-frRLJXXREV6wSWngixSaG-WzNCs7YcA",
  authDomain: "to-do-5ecb6.firebaseapp.com",
  projectId: "to-do-5ecb6",
  storageBucket: "to-do-5ecb6.appspot.com",
  messagingSenderId: "513733145244",
  appId: "1:513733145244:web:831afd79ba1cc06184f359",
  measurementId: "G-BZYM8P33C8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.Analytics();
var db = firebase.firestore();