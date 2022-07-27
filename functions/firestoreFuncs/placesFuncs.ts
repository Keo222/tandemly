import { doc, getDoc, setDoc } from "firebase/firestore";
import { db, firebaseAuth } from "@/firebase/firebaseConfig";

async function saveUserPlace(placeId: string) {
  const user = firebaseAuth.currentUser;
  if (user) {
  }
}

// function getUserSavedPlaces(){
//   const savedPlacesDoc = doc(db, "userInfo", )
// }
