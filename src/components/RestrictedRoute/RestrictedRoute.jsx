import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ children }) => {
  const isRefreshing = useSelector(selectIsRefreshing);
  return isRefreshing ? <Navigate to="/contacts" replace /> : children;
};

export default RestrictedRoute;
