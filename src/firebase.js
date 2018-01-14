import * as firebase from 'firebase';
require("firebase/firestore"); // Required for side-effects

// Initialize Firebase
var config = {
  apiKey: "AIzaSyB9dji8xyx0DjSyv-nCYw8qaWYHvvHZUaY",
  authDomain: "spend-manager.firebaseapp.com",
  databaseURL: "https://spend-manager.firebaseio.com",
  projectId: "spend-manager",
  storageBucket: "spend-manager.appspot.com",
  messagingSenderId: "451959094458"
};
firebase.initializeApp(config);

export const db = firebase.firestore();
export const auth = firebase.auth();