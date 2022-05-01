import * as Yup from "yup";

import { Checkbox, FilledButton, TextInput } from "../../components";
import { Form, Formik } from "formik";

import { AuthLayout } from "../../layout";
import { Link } from "react-router-dom";
import { LoginBox } from "./LoginStyles";
import React from "react";
import { appRoutes } from "../../constants/appRoutes";
import logo from "../../assets/LogoLight.png";

// Validation Schema
const FormValidation = Yup.object().shape({
  email: Yup.string().email("Invalid Email!!").required("Required"),
  password: Yup.string()
    .min(6, "Password should have atleast 6 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password do not match")
    .min(6, "Password should have atleast 6 characters")
    .required("Required"),
});

const Register = () => {
  const initialFormValues = {
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false,
  };

  const OnRegisterSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <AuthLayout>
        <LoginBox logo={logo}>
          <div>
            <div className="logo" />
            <div className="titleBox">
              <h2>Hey!! Welcome to bright exams</h2>
              <p>Create your account and start Learning</p>
            </div>
            <Formik
              initialValues={initialFormValues}
              validationSchema={FormValidation}
              onSubmit={OnRegisterSubmit}
            >
              {(props) => (
                <Form>
                  <TextInput label={"Email"} type="email" name="email" />
                  <TextInput
                    label={"Password"}
                    type="password"
                    name="password"
                  />
                  <TextInput
                    label={"Confirm Password"}
                    type="password"
                    name="confirmPassword"
                  />
                  <div className="actions">
                    <Checkbox name={"rememberMe"} label="Remember me" />
                    <FilledButton label={"Submit"} type="submit" />
                  </div>
                </Form>
              )}
            </Formik>
            <p className="to_register">
              Already have an account ?
              <span>
                &nbsp;
                <Link to={appRoutes.login}>Login</Link>
              </span>
            </p>
          </div>
        </LoginBox>
      </AuthLayout>
    </>
  );
};

export default Register;
