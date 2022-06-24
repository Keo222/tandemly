import { createContext, useContext, useState } from "react";
import { firebaseAuth } from "@/firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

type Props = {
  children: JSX.Element;
};

export const AuthContext = createContext<boolean | null>(null);

export const AuthContextProvider = ({ children }: Props) => {
  const currLogin = !!firebaseAuth.currentUser;
  const [loggedIn, setLoggedIn] = useState(currLogin);
  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });
  return (
    <AuthContext.Provider value={loggedIn}>
      {children}
    </AuthContext.Provider>
  );
};
