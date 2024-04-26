import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isRefreshing = useSelector(selectIsRefreshing);
  return isRefreshing ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
