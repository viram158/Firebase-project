import React from 'react'
import {DB} from "../component/FirebaseConfig"
import{
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
}  from "firebase/firestore"

const bookCollectionRef = collection(DB , 'data');

class BookDataService {
  addBooks = (newBook)=>{
    return addDoc(bookCollectionRef,newBook);
  };
  updateBooks = (id,updateBooks)=>{
    const bookDoc = doc (DB, "data",id);
    return updateDoc(bookDoc,updateBooks);

  };
deleteBooks = (id)=>{
  const bookDoc = doc(DB,"data",id);
  return deleteDoc(bookDoc);
};
 getAllbooks =()=>{
  return getDocs(bookCollectionRef);
 };
 getBook = (id)=>{
  const bookDoc = doc(DB,"data",id);
  return getDoc(bookDoc);
 };
}

export default new BookDataService();