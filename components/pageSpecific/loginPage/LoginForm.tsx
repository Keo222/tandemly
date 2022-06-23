import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Styled Components
import {
  FormOrganization,
  FormHeader,
  StyledTextInput,
} from "@/components/generic/forms";
import { SubmitButton } from "@/components/generic/buttons/FormButtons";

// Form Functions
import { signInExistingUser } from "@/functions/userInfoFuncs";
import { useRouter } from "next/router";

type Props = {};

const LoginForm = (props: Props) => {
  const router = useRouter();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string()
          .required("Required")
          .email("Not a vaild email"),
        password: Yup.string()
          .required("Required")
          .matches(
            /[$&+,:;=?@#|'<>.^*()%!-]+/,
            "Must include at least 1 special character"
          )
          .matches(/[A-Z]+/, "Must include at least 1 capital letter")
          .min(8, "Must be at least 8 characters"),
      })}
      onSubmit={async (values) => {
        try {
          await signInExistingUser(values.email, values.password);
          router.push("/");
          console.log("Signed in existing user!");
        } catch (error: any) {
          console.error(error);
        }
      }}
    >
      <Form>
        <FormOrganization>
          <FormHeader text={"Sign In"} />

          <label htmlFor="email">Email</label>
          <Field name="email" type="email" as={StyledTextInput} />
          <ErrorMessage name="email" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" as={StyledTextInput} />
          <ErrorMessage name="password" />

          <SubmitButton />
        </FormOrganization>
      </Form>
    </Formik>
  );
};

export default LoginForm;
