// ===============================
// Firebase
// ===============================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

const firebaseConfig = {

    apiKey: "AIzaSyB6mwaWilCSTxT22phpLF0F6hZrJHOnnsE",
    authDomain: "asma-gutschein.firebaseapp.com",
    projectId: "asma-gutschein",
    storageBucket: "asma-gutschein.firebasestorage.app",
    messagingSenderId: "104110369931",
    appId: "1:104110369931:web:d279417ad41a73301cb88e"


};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };