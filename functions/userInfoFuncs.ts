import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { firebaseAuth } from "../firebase/firebaseConfig";

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
    sendEmailVerification(user);
    console.log("Log after email:", user);
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
