var result=[];
var Act_date;
var Act_name;
var Activity=[];
var count;
var Discipline;
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, collection, addDoc,doc,setDoc, Timestamp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCdtcW4K3M3MxhvV-UeOsqLncDobqx_760",
    authDomain: "teacheraid-d3712.firebaseapp.com",
    projectId: "teacheraid-d3712",
    storageBucket: "teacheraid-d3712.appspot.com",
    messagingSenderId: "661328003243",
    appId: "1:661328003243:web:67fe76d194ea3a40fc77ee",
    measurementId: "G-RT4V4KHWFJ"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
        
    ) {
        count+=1;
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}


domReady(function () {
 
    // If found you qr code
    function onScanSuccess (decodeText, decodeResult) {
      //  for (var i=1; i<3;i=i+1){
        alert("You Qr is : " + decodeText, decodeResult);
        result=decodeText;
        Act_date=document.getElementById("Activity_Date").value;
        Act_name=document.getElementById("Activity_Name").value;
        Discipline=document.getElementById("Discipline").value;
        console.log(Act_name);

        console.log(Act_date);
      
       
       
        setDoc(doc(firestore, "Activities",result), {
            Date:Act_date,
            Academic:Act_name,
            Discipline:Discipline
         });
      //  Timestamp.fromDate(new Date(Act_date)),}
      alert("Scanned");
    }
 
    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbos: 250 }
    );
    htmlscanner.render(onScanSuccess);
});

   

  