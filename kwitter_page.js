//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDxuGYyOIfI9s9ZePFSX9ulsHYJL5YKjd8",
      authDomain: "class94kwitter-app.firebaseapp.com",
      databaseURL: "https://class94kwitter-app-default-rtdb.firebaseio.com",
      projectId: "class94kwitter-app",
      storageBucket: "class94kwitter-app.appspot.com",
      messagingSenderId: "838665090968",
      appId: "1:838665090968:web:bf9960eb57dcd5cc11dded"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

room_name=localStorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
message = message_data["message"];
name = message_data["name"];
like = message_data["like"];

name_withtag = "<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_withtag = "<h4 class='message_h4'>"+message+"</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+"value = "+like+"onclick='updatelike(this.id)'>";
span_with_tag ="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row = name_withtag + message_withtag + like_button + span_with_tag;
document.getElementById("output").innerHTML+=row;


//End code
      } });  }); }
getData();
function send()
{
      
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
    });
    document.getElementById("msg").value="";
}