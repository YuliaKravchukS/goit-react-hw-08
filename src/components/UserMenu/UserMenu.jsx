import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selector";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <span>Hi, {user.name}</span>
      <button onClick={onLogout} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
