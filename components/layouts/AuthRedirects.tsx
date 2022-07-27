import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import protectedPaths from "@/utils/etc/ProtectedPaths";
import { AuthContext } from "context/authContext";

type Props = {
  children: JSX.Element;
};

const AuthRedirectsWrapper = ({ children }: Props) => {
  const loggedIn = useContext(AuthContext);
  const router = useRouter();
  const path = router.pathname;

  useEffect(() => {
    if (protectedPaths.includes(path) && !loggedIn) {
      router.push("/login");
    }
  }, [path, loggedIn, router]);

  return <>{children}</>;
};

export default AuthRedirectsWrapper;
