import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDsixwsZvj2UQHCpY4CfhfHLVL-I2dBzHM",
  authDomain: "appointment-app-207a1.firebaseapp.com",
  databaseURL: "https://appointment-app-207a1.firebaseio.com",
  projectId: "appointment-app-207a1",
  storageBucket: "appointment-app-207a1.appspot.com",
  messagingSenderId: "302427742480",
  appId: "1:302427742480:web:b8b351f8603911fa9b4595"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export const fBaseUsers = db.collection("users");
export const fBaseEvents = db.collection("events");
export const fBaseBooking = db.collection("booking");

export const fBaseBooked = db.collection("bookedSlots");

