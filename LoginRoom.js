function Adduser() {

    UserName = document.getElementById("UserName").value;

    localStorage.setItem("UserName",UserName);

    window.location = "AfterLoginRoom.html";

    firebase.database().ref("/").child(UserName).update({

        purpose : " Make Stuff "

    });
    
}