import { useState } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { infoUserName } from "../../redux/loginSlice";

const EditName = () => {
  const navigate = useNavigate();
  const loginStore = useSelector((state) => state.login);

  const storeUserProfil = loginStore.userProfil;
  const dispatch = useDispatch();

  const [newUserName, setNewUserName] = useState(storeUserProfil.userName);
  const handleChangeUserName = (e) => {
    setNewUserName(e.target.value);
  };
  console.log(newUserName);
  console.log(loginStore.userProfil);
  const handleCancel = () => {
    navigate("/user");
  };

  const handleForm = async (e) => {
    e.preventDefault();

    const token = loginStore.userToken;

    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName: newUserName }),
    });
    if (response.ok) {
      dispatch(infoUserName(newUserName));
      const data = await response.json();
      console.log("le user name a bien été modifié", data);
    } else {
      console.error("une erreur s'est produite");
    }
  };
  return (
    <main className="main bg-dark">
      <section className="sign-in-content toogle-edit-name">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Edit User info</h1>
        <form
          onSubmit={handleForm}
          onClick={(event) => event.stopPropagation()}
        >
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              value={newUserName}
              onChange={handleChangeUserName}
              type="text"
              id="username"
              placeholder="Tapez votre username"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              disabled
              value={storeUserProfil.firstName}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              disabled
              value={storeUserProfil.lastName}
            />
          </div>
          <Button btnText={"Save"} className={"sign-in-button"} />
        </form>
        <Button
          btnText={"Cancel"}
          onClick={handleCancel}
          className={"sign-in-button"}
        />
      </section>
    </main>
  );
};

export default EditName;
