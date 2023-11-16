var firebaseConfig = {
    apiKey: "AIzaSyDlUYUBwW4HJCgq9mnBF6fvgBprQAaMpOw",
    authDomain: "chatting-app-e76e4.firebaseapp.com",
    databaseURL: "https://chatting-app-e76e4-default-rtdb.firebaseio.com",
    projectId: "chatting-app-e76e4",
    storageBucket: "chatting-app-e76e4.appspot.com",
    messagingSenderId: "549274359188",
    appId: "1:549274359188:web:0703a4e770961aaa95ab81"
  }

   firebase.initializeApp(firebaseConfig)

     user_name = localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !"

    function addRoom()
    {
      room_name = document.getElementById("room_name").value 
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      })
      localStorage.setItem("room_name" , room_name)
      window.location = kwitter_room.html 
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class= 'room_name' id= " + Room_names + "onclick= 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      localStorage.setItem("room_name" , name)
      window.location = "chat_page.html"
}

function logout()
{
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}
  

