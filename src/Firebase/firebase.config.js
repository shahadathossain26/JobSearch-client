// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnczrzvJh5hbfkoybVO7Om6R97KRVbTOw",
    authDomain: "jobsearch-8e959.firebaseapp.com",
    projectId: "jobsearch-8e959",
    storageBucket: "jobsearch-8e959.appspot.com",
    messagingSenderId: "451073273035",
    appId: "1:451073273035:web:17dc03696bf77f8ebdbf4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;