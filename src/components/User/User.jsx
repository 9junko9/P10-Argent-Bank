import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Accounts from "../../data/account";
import Account from "../Account/Account";
import Button from "../Button/Button";

const User = () => {
  const username = useSelector((state) => state.login.userProfil.userName);

  const navigate = useNavigate();
  const handleDisplayEdit = (e) => {
    e.preventDefault();
    navigate("/editUser");
  };
  return (
    <main className="main bg-dark2">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {username}!
        </h1>
        <Button
          className={"edit-button"}
          btnText={"Edit Name"}
          onClick={handleDisplayEdit}
        ></Button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {Accounts.map((account, index) => (
        <Account
          key={"account" + index}
          title={account.title}
          amount={account.amount}
          description={account.description}
        />
      ))}
    </main>
  );
};

export default User;
