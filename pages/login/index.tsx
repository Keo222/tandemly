import React from "react";
import type { NextPage } from "next";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

// Layout
import PageLayout from "@/components/layouts/PageLayout";
import { GreyBackground } from "styles/styledComponents/BackgroundDiv";

// Components
import { SubmitButton } from "@/components/generic/buttons/FormButtons";
import { signUpNewUser } from "./_helperLogin";

// Styled Components
const FormHeader = styled.h3`
  text-align: center;
`;

const FormOrganization = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: clamp(200px, 60vw, 1000px);
  margin-inline: auto;
  margin-block: 5rem;

  & input:last-of-type {
    margin-bottom: 3rem;
  }
`;

const StyledTextInput = styled.input`
  width: 100%;
  border-radius: 5px;
  border: 1px solid black;
  margin-bottom: 1rem;
`;

type Props = {};

const LoginPage: NextPage = (props: Props) => {
  return (
    <PageLayout>
      <GreyBackground />
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
            .required("Email required")
            .email("Not a vaild email"),
          password: Yup.string()
            .required("Password required")
            .matches(
              /[$&+,:;=?@#|'<>.^*()%!-]+/,
              "Password must include at least 1 special character"
            )
            .matches(
              /[A-Z]+/,
              "Password must include at least 1 capital letter"
            )
            .min(8, "Password must be at least 8 characters"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await signUpNewUser(values.email, values.password);
          console.log("Submitted! Values:", values);
          setTimeout(() => {
            alert("Submitted!");
            setSubmitting(false);
          }, 3000);
        }}
      >
        <Form>
          <FormOrganization>
            <FormHeader>Sign Up New User</FormHeader>
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

      {/* Sign In Existing User */}
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
            <FormHeader>Sign In Existing User</FormHeader>
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
            <FormHeader>Sign In Existing User</FormHeader>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" as={StyledTextInput} />
            <ErrorMessage name="firstName" />
            <SubmitButton />
          </FormOrganization>
        </Form>
      </Formik>
    </PageLayout>
  );
};

export default LoginPage;
