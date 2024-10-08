import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
("");

import { useDispatch } from "react-redux";
import { loginUser, infoUser } from "../../redux/loginSlice";
import { logUser, getUserProfile } from "../../core/api";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remenberMe, setRemenberMe] = useState(false);
  const [erreur, setErreur] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlelogin = async (e) => {
    e.preventDefault();

    try {
      const userData = await logUser(email, password);
      const token = userData.body.token;
      dispatch(loginUser(token));

      const userInfo = await getUserProfile(token);
      const userInfos = {
        email: userInfo.body.email,
        firstName: userInfo.body.firstName,
        lastName: userInfo.body.lastName,
        userName: userInfo.body.userName,
      };
      dispatch(infoUser(userInfos));
      navigate("/user");
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      setErreur("Identifiants incorrects");
    }
  };

  const handleRememberMe = (e) => {
    setRemenberMe(e.target.checked);
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handlelogin}>
          <div className="input-wrapper">
            <label htmlFor="userEmail">User Email</label>
            <input
              type="email"
              id="userEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" exemple@gmail.com"
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={remenberMe}
              onChange={handleRememberMe}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Button btnText={"Sign In"} className={"sign-in-button"} />
        </form>
        {erreur && <p className="errorConexion">{erreur}</p>}
      </section>
    </main>
  );
};

export default SignIn;
