// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCW8tmXE_bBq8Qtw-GCjAqAQ2o14HwIVoA",
    authDomain: "math-ced44.firebaseapp.com",
    projectId: "math-ced44",
    storageBucket: "math-ced44.appspot.com",
    messagingSenderId: "365746128883",
    appId: "1:365746128883:web:cb672c2fb5b1f56db0b486",
    measurementId: "G-VDNT7LZC00"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function back(){
    window.location="index.html";
}

function signup(){
    username=document.getElementById("username").value;
    password=document.getElementById("password").value;
    if(username==""){
        document.getElementById("user").innerHTML="please fill the username";
        document.getElementById("user").style.color="red";
    }
    else{
        if(password==""){
            document.getElementById("pass").innerHTML="please fill the password";
            document.getElementById("pass").style.color="red";
        }
        else{
            firebase.database().ref("/").child(username).update({
                password : password
          });
          localStorage.setItem("username",username);
          localStorage.setItem("password",password);
          window.location="kwitter_page.html";
        }
    }
}