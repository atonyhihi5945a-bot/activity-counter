import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDM2MmrgoV52_Lo906rXseixLatcy2l_r4",
  authDomain: "project99-4c4bf.firebaseapp.com",
  projectId: "project99-4c4bf",
  storageBucket: "project99-4c4bf.firebasestorage.app",
  messagingSenderId: "390386298505",
  appId: "1:390386298505:web:93ac934be9931adf51a058"
};

export const SUPERVISOR_UID = "YJnSOu8nkPhyp9EnSDzmSmF6oJi1";

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
