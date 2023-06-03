import {
  collection,
  getFirestore,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import { colRef, db, app } from "./firebase";



export const fetchDoc = async () => {

    // const q = query(colRef, where("title", "<>", "false"), where("author", "<>", "false"))

    const doc_ref = await getDocs(colRef) 
    const data = []

    doc_ref.forEach(book => {
      data.push({
        id: book.id,
        ...book.data()
      })
    })

    return data
}
