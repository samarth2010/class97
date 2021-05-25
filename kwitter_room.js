  // Your web app's Firebase configuration
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
document.getElementById("u_n").innerHTML = "Welcome " + user_name + " !";

function Addroom() {

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room"
      });


      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";


}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Roomname-" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
 
function logout() 
{
      
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location= "index.html";

}