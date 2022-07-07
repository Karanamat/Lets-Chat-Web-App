// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyB92iJfrsdRJw21Hg0-d4vgeqwDJZOiv4k",
  authDomain: "ihaveadids.firebaseapp.com",
  databaseURL: "https://ihaveadids-default-rtdb.firebaseio.com",
  projectId: "ihaveadids",
  storageBucket: "ihaveadids.appspot.com",
  messagingSenderId: "1035971432115",
  appId: "1:1035971432115:web:9983f5c538455c95b42ac6",
  measurementId: "G-E0KCD7V9M2"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
      purpose : "adding user"
  });
 
  localStorage.setItem("user_name", user_name);

  window.location = "chat_room.html";
}



