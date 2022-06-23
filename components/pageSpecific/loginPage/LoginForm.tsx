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
import { signInExistingUser } from "@/functions/userFuncs";

type Props = {};

const LoginForm = (props: Props) => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .required("Required")
          .max(12, "First name must be 12 characters or less"),
        lastName: Yup.string()
          .required("Required")
          .max(12, "Last name must be 12 characters or less"),
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
          .length(8, "Must be at least 8 characters"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        console.log("Submitted! Values:", values);
      }}
    >
      <Form>
        <FormOrganization>
          <FormHeader text={"Sign In"} />
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" as={StyledTextInput} />
          <ErrorMessage name="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" as={StyledTextInput} />
          <ErrorMessage name="lastName" />

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
