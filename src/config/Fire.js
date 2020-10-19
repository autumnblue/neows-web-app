import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAAr34m-pfPAH0z87QZkG4MHHKe4UF0wV4",
    authDomain: "neows-test.firebaseapp.com",
    databaseURL: "https://neows-test.firebaseio.com",
    projectId: "neows-test",
    storageBucket: "neows-test.appspot.com",
    messagingSenderId: "379962325141",
    appId: "1:379962325141:web:fa3e97ae36fdb5a3dec39c",
    measurementId: "G-TCLKFKTVE2"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;



