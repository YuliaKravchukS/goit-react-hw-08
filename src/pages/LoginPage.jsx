import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "../components/ContactForm/ContactForm.module.css";
import { useDispatch } from "react-redux";

import { login } from "../redux/auth/operations";
// import { nanoid } from "nanoid";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, "Too Short!Minimum 3 characters")
    .max(50, "Too Long!Maximum 50 characters")
    .required("Required"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Your password must be greater than 8 characters!"),
});

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <h2>Log in user</h2>

          <label className={css.label}>
            <span>Email</span>
            <Field
              className={css.field}
              type="email"
              name="email"
              placeholder="mail@com.ua"
            />
            {errors.email ? (
              <div className={css.errorMessage}>{errors.email}</div>
            ) : null}
          </label>
          <label className={css.label}>
            <span>Password</span>
            <Field
              className={css.field}
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            {errors.password ? (
              <div className={css.errorMessage}>{errors.password}</div>
            ) : null}
          </label>

          <button type="submit" className={css.glowOnHover}>
            Log in
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginPage;
