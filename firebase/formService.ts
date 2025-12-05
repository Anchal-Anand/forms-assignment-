// firebase/formService.ts
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function saveForm(collectionName: string, data: any) {
  const colRef = collection(db, collectionName);
  return await addDoc(colRef, data);
}

export async function getForms(collectionName: string) {
  const colRef = collection(db, collectionName);
  const snapshot = await getDocs(colRef);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}
