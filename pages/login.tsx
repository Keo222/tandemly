import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

// Styled Components
const FormOrganization = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const StyledTextInput = styled.input`
  width: 100%;
  background-color: green;
`;

type Props = {};

const login = (props: Props) => {
  return (
    <div>
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
          setTimeout(() => {
            alert("Submitted!");
            setSubmitting(false);
          });
        }}
      >
        <Form>
          <FormOrganization>
            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" as={StyledTextInput} />
            <ErrorMessage name="firstName" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />

            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" />

            <button type="submit">Submit</button>
          </FormOrganization>
        </Form>
      </Formik>
    </div>
  );
};

export default login;
