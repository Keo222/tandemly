import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  updateProfile,
  User,
} from "firebase/auth";
import { firebaseAuth, db } from "../firebase/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

async function saveNewUser(id: string) {
  const genericUserData = { role: "user" };
  await setDoc(doc(db, "users", id), genericUserData);
}

export async function updateUserProfile(
  user: User,
  email?: string,
  displayName?: string
) {
  const newProfileInfo: { displayName?: string; email?: string } = {};
  if (typeof displayName !== "undefined") {
    newProfileInfo.displayName = displayName;
  }
  if (typeof email !== "undefined") {
    newProfileInfo.email = email;
  }
  if (newProfileInfo !== {}) {
    await updateProfile(user, newProfileInfo);
    console.log("It worked!");
  }
}

export async function signUpNewUser(
  email: string,
  password: string
): Promise<void> {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const user = userCredential.user;
    await sendEmailVerification(user);

    const id = user.uid;
    await saveNewUser(id);
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // TAKE OUT CONSOLE MSG
    console.error(errorCode + ": " + errorMessage);
  }
}

export async function signInExistingUser(
  email: string,
  password: string
): Promise<void> {
  try {
    const userCredential = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("Log:", user);
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // TAKE OUT CONSOLE MSG
    console.error(errorCode + ": " + errorMessage);
  }
}

export async function signOutUser() {
  try {
    await signOut(firebaseAuth);
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // TAKE OUT CONSOLE MSG
    console.error(errorCode + ": " + errorMessage);
  }
}

export async function updateUserDisplayName(displayName: string) {
  if (firebaseAuth.currentUser) {
    try {
      await updateProfile(firebaseAuth.currentUser, {
        displayName: displayName,
      });
    } catch (error: any) {
      console.error(error.code + ": " + error.message);
    }
  } else {
    alert("There are no users signed in!");
  }
}

export async function updateUserPassword(newPassword: string) {
  try {
    const user = firebaseAuth.currentUser;
    if (user) {
      await updatePassword(user, newPassword);
    }
  } catch (error: any) {
    console.error(error.code + ": " + error.message);
  }
}
