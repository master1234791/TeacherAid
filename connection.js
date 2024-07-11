 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyCdtcW4K3M3MxhvV-UeOsqLncDobqx_760",
  authDomain: "teacheraid-d3712.firebaseapp.com",
  projectId: "teacheraid-d3712",
  storageBucket: "teacheraid-d3712.appspot.com",
  messagingSenderId: "661328003243",
  appId: "1:661328003243:web:67fe76d194ea3a40fc77ee",
  measurementId: "G-RT4V4KHWFJ"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);

 export{app,analytics}

 console.log("Conexión a Firebase establecida correctamente.");