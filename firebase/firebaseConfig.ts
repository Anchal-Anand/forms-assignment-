// firebase/firebaseConfig.ts
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyApVRs1HkBJeKYMFQ5x7g6Ga1xBL9XfBGI",
  authDomain: "forms-project-6cc22.firebaseapp.com",
  projectId: "forms-project-6cc22",
  storageBucket: "forms-project-6cc22.firebasestorage.app",
  messagingSenderId: "411583952260",
  appId: "1:411583952260:web:2b13362efc014ad4ff99d1",
  measurementId: "G-E810016PXQ"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
