import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";

import { useSelector } from "react-redux";

const SecurityRoutes = ({ children }) => {
  const token = useSelector((state) => state.login.userToken);
  return token ? children : <Navigate to="/sign-in" />;
};
SecurityRoutes.propTypes = {
  children: PropTypes.node,
};
export default SecurityRoutes;
