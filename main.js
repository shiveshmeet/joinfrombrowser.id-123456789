function rename() {
	var personprompt = prompt("Please Enter A New Screen Name:");
  if (personprompt != null) {
	  var uname = personprompt ;
    document.getElementById("username").innerHTML =  uname;
	  document.getElementById("usernamedrp").value = uname;
  }
}
function audio() {
	if (document.getElementById("mic").src == "https://shiveshmeet.github.io/assests/microphone-slash-solid.svg") {
	document.getElementById("mic").src = "https://shiveshmeet.github.io/assests/microphone-solid.svg"; 
} else {
	document.getElementById("mic").src = "https://shiveshmeet.github.io/assests/microphone-slash-solid.svg";
};
}
function video() {
	if (document.getElementById("video").src == "https://shiveshmeet.github.io/assests/video-solid.svg") {
	document.getElementById("video").src = "https://shiveshmeet.github.io/assests/video-slash-solid.svg";
		
} else {
	document.getElementById("video").src = "https://shiveshmeet.github.io/assests/video-solid.svg";
	var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}
}
}
function leave() {
	window.confirm("Are You Sure To Leave This Meeting?")
}
function chat() {
	var chatopen = document.getElementById("chat").style.display;
	if (chatopen == "none") {
		chatopen = "block";
	} else {
		chatopen = "none";
	}
}
function screenshare() {
	if (document.getElementById("screenshare").src == "https://www.freelogodesign.org/file/app/client/thumb/ec8523f5-f256-4bcb-b21f-594388c798a0_200x200.png?1607682658201"){
		document.getElementById("screenshare").src = "https://www.freelogodesign.org/file/app/client/thumb/4f91a98b-159b-4202-9022-391f01b6d3b8_200x200.png?1607681557297";
	} else {
		document.getElementById("screenshare").src = "https://www.freelogodesign.org/file/app/client/thumb/ec8523f5-f256-4bcb-b21f-594388c798a0_200x200.png?1607682658201";
		videoElement.requestPictureInPicture();
	}
}
function fullscreen() {
if (document.getElementById("fscreen").innerHTML == "Fullscreen") {
	document.getElementById("fscreen").innerHTML = "Exit Full Screen";
} else {
	document.getElementById("fscreen").innerHTML = "Fullscreen";
}
}