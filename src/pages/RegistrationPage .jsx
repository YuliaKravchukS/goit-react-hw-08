import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "../components/ContactForm/ContactForm.module.css";
import { useDispatch } from "react-redux";

import { register } from "../redux/auth/operations";
// import { nanoid } from "nanoid";

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!Minimum 3 characters")
    .max(50, "Too Long!Maximum 50 characters")
    .required("Required"),
  email: Yup.string()
    .min(3, "Too Short!Minimum 3 characters")
    .max(50, "Too Long!Maximum 50 characters")
    .required("Required"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Your password must be greater than 8 characters!"),
});

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    console.log("values: ", values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={registerSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <h2>Register user</h2>
          <label className={css.label}>
            <span>Name</span>
            <Field
              className={css.field}
              type="text"
              name="name"
              placeholder="Please enter your first and last name"
            />
            {errors.name ? (
              <div className={css.errorMessage}>{errors.name}</div>
            ) : null}
          </label>
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
            Create account
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationPage;
