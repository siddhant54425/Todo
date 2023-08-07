
import { initializeApp } from "firebase/app";
import {getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBaX-ZRey346TmxgbEcbLGB7tkVfZ-gwKg",
  authDomain: "react-todo-list-dbeba.firebaseapp.com",
  projectId: "react-todo-list-dbeba",
  storageBucket: "react-todo-list-dbeba.appspot.com",
  messagingSenderId: "748533476687",
  appId: "1:748533476687:web:b0791360ecb6fbf647693a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
