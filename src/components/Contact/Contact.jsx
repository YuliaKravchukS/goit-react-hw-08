import css from "./Contact.module.css";
import { HiUser } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
const Contact = ({ user }) => {
  const dispatch = useDispatch();
  //  const users = useSelector(selectContacts);
  const onDeleteUser = (userId) => {
    dispatch(deleteContact(userId));
  };
  return (
    <div className={css.wrap}>
      <div className={css.contact}>
        <div className={css.contactField}>
          <HiUser /> {user.name}
        </div>
        <div className={css.contactField}>
          <FaPhoneAlt size="14" /> {user.number}
        </div>
      </div>
      <button type="button" onClick={() => onDeleteUser(user.id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
