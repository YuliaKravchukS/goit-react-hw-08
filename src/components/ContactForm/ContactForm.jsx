import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
// import { nanoid } from "nanoid";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!Minimum 3 characters")
    .max(50, "Too Long!Maximum 50 characters")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!Minimum 3 characters")
    .max(50, "Too Long!Maximum 50 characters")
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number format"),
});
const ContactForm = () => {
  const dispatch = useDispatch();

  const addUser = (formData) => {
    // const finalUser = {
    //   ...formData,
    //   id: nanoid(),
    // };
    dispatch(addContact(formData));
  };

  const handleSubmit = (values, actions) => {
    addUser(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      {({ errors }) => (
        <Form className={css.form}>
          <label className={css.label}>
            <span>Name</span>
            <Field
              className={css.field}
              type="text"
              name="name"
              placeholder="Please enter your name"
            />
            {errors.name ? (
              <div className={css.errorMessage}>{errors.name}</div>
            ) : null}
          </label>
          <label className={css.label}>
            <span>Number</span>
            <Field
              className={css.field}
              type="text"
              name="number"
              pattern="\d{3}-\d{2}-\d{2}"
              placeholder="XXX-XX-XX"
            />
            {errors.number ? (
              <div className={css.errorMessage}>{errors.number}</div>
            ) : null}
          </label>

          <button type="submit" className={css.glowOnHover}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
