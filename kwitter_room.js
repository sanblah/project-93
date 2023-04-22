
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDiWSwePjcFDv6yQ7_iA-Dn7zZeM8k9XI0",
      authDomain: "qwitter-e3f39.firebaseapp.com",
      databaseURL: "https://qwitter-e3f39-default-rtdb.firebaseio.com",
      projectId: "qwitter-e3f39",
      storageBucket: "qwitter-e3f39.appspot.com",
      messagingSenderId: "240401902828",
      appId: "1:240401902828:web:dfd7a14bf2bbc815e549c9"
    };
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
