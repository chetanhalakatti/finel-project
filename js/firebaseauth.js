import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDMJSqhiWS_nEcX8jWUkMy7F0cWbIbjONI",
  authDomain: "my-project-6b77a.firebaseapp.com",
  projectId: "my-project-6b77a",
  storageBucket: "my-project-6b77a.appspot.com",
  messagingSenderId: "15864832683",
  appId: "1:15864832683:web:0daeb69ba85fb361e28dee",
  measurementId: "G-6V7F15P5PY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const regSubmitBtn = document.getElementById("regSubmitBtn");
regSubmitBtn.addEventListener("click", () => {
  const email = document.getElementById("reg_email").value;
  console.log(email);
  const password = document.getElementById("reg_password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("user account created ");
      // window.location.href = "index.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
});

const loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", () => {
  const email = document.getElementById("loginEmail").value;
  console.log(email);
  const password = document.getElementById("loginPassword").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("user loged in ");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});
