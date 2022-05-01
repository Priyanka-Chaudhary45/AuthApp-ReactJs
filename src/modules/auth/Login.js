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
});

const Login = () => {
  const initialFormValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const OnLoginSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <AuthLayout>
        <LoginBox logo={logo}>
          <div>
            <div className="logo" />
            <div className="titleBox">
              <h2>Hey!! Welcome back</h2>
              <p>Sign in to your account</p>
            </div>
            <Formik
              initialValues={initialFormValues}
              validationSchema={FormValidation}
              onSubmit={OnLoginSubmit}
            >
              {(props) => (
                <Form>
                  <TextInput label={"Email"} type="email" name="email" />
                  <TextInput
                    label={"Password"}
                    type="password"
                    name="password"
                  />
                  <div className="actions">
                    <Checkbox name={"rememberMe"} label="Remember me" />
                    <FilledButton label={"Submit"} type="submit" />
                  </div>
                </Form>
              )}
            </Formik>
            <p className="to_register">
              Didn't have an account ?
              <span>
                &nbsp;
                <Link to={appRoutes.register}>Register Now</Link>
              </span>
            </p>
          </div>
        </LoginBox>
      </AuthLayout>
    </>
  );
};

export default Login;
