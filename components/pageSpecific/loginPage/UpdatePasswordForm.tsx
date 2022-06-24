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

// Form Function
import { updateUserPassword } from "../../../functions/userInfoFuncs";

const UpdatePasswordForm = () => {
  return (
    <Formik
      initialValues={{
        newPassword: "",
        confirmPassword: "",
      }}
      validationSchema={Yup.object({
        newPassword: Yup.string()
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
        confirmPassword: Yup.string().oneOf(
          [Yup.ref("password"), null],
          "Passwords must match"
        ),
      })}
      onSubmit={async (values) => {
        try {
          await updateUserPassword(values.newPassword);
        } catch (error: any) {
          console.error(error);
        }
      }}
    >
      <Form>
        <FormOrganization>
          <FormHeader text={"Update Password"} />

          <label htmlFor="newPassword">New Password</label>
          <Field name="newPassword" type="password" as={StyledTextInput} />
          <ErrorMessage name="newPassword" />

          <label htmlFor="confirmPassword">Confirm New Password</label>
          <Field
            name="confirmPassword"
            type="password"
            as={StyledTextInput}
          />
          <ErrorMessage name="confirmPassword" />

          <SubmitButton />
        </FormOrganization>
      </Form>
    </Formik>
  );
};

export default UpdatePasswordForm;
