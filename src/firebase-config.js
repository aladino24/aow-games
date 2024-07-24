import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC4-GQVR1qJt2H_uuRbq2k1rjMQyjfkTSk",
  authDomain: "aow-games.firebaseapp.com",
  projectId: "aow-games",
  storageBucket: "aow-games.appspot.com",
  messagingSenderId: "811398916057",
  appId: "1:811398916057:web:3402621f08b5deddc25bc8",
  measurementId: "G-FP38DQC502"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

