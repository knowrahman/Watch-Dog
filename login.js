firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
        console.log("logged in");
        location.replace("dashBoard.html");

    } else {
      // No user is signed in.
        console.log("Not Logged IN Brother");
    }
  });
let auth =firebase.auth();

function login(){
    const email = document.getElementById("InputEmail").value;
    const password = document.getElementById("InputPassword").value;
    console.log("Email :"+email+"Password : "+password);
    auth.signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        console.log("Signing in....");
        let errorCode = error.code;
        let errorMessage = error.message;
        alert(errorMessage);
        console.log(errorMessage);
    });
}

let user = auth.currentUser;

if (user != null) {
    //name = user.displayName;
    username = user.email;
    // email = user.email;
    // photoUrl = user.photoURL;
    // emailVerified = user.emailVerified;
    // uid = user.uid;
}
else {
    username = "it was Null";
}

function name(){
    return username;
}


























