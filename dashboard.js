let auth =firebase.auth();
// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = firebase.storage();

const storageRef = storage.ref();
let i=0;
storageRef.child('imagesDeteccted/').listAll().then(function (result) {

    result.items.forEach(function(imageRef){
        //console.log(imageRef);
        i++;
        displayImage(i,imageRef);
    });

});
let dateTime = document.getElementById("date-time");
dateTime.innerHTML= dateAndTime();
function dateAndTime() {
    date = new Date();
    let weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let dateString = weekdayNames[date.getDay()] + " "
        + date.getHours() + ":" + ("00" + date.getMinutes()).slice(-2) + ", "
        + date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear();

    return dateString;
}



let imagesBucket = document.getElementById("images=bucket");

function displayImage(row,images) {
    images.getDownloadURL().then(function (url) {
       console.log(url);
       let newHtml = "";
       newHtml+= "<div class=\"row justify-content-center images\">";
       newHtml+= "<div>";
       newHtml+= "<img src=\""+url+"\" class=\"rounded\" alt=\"Image\">";
       newHtml+= "</div>";
       newHtml+= "</div>";
       imagesBucket.innerHTML+=newHtml;
    });
}


function logout() {
    auth.signOut().then(function() {
        // Sign-out successful.
        console.log("You Are Signed Out");
        location.replace("index.html");
    }).catch(function(error) {
        // An error happened.
        console.log(error);
    });
}