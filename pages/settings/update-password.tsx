import PageLayout from "@/components/layouts/PageLayout";
import { NextPage } from "next";
import React from "react";
import UpdatePasswordForm from "../../components/pageSpecific/loginPage/UpdatePasswordForm";

// Types
import type { GetServerSideProps } from "next";
import { firebaseAuth } from "@/firebase/firebaseConfig";

// Layout

type Props = {};

const updatePassword: NextPage = (props: Props) => {
  return (
    <PageLayout>
      <UpdatePasswordForm />
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const user = firebaseAuth.currentUser;
  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default updatePassword;
