import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthStatus } from "../context/ContextProvider";
import { useContext } from "react";
import "./Login.css";

const Login = () => {
  let navigate = useNavigate();
  const { setAuthData } = useContext(AuthStatus);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("authData", true);
      setAuthData(true);
      navigate("/");
    });
  };

  return (
    <div className="loginPage">
      <div>
        <span>Sign in with Google </span>
        <span>to Continue</span>
      </div>
      <button className="googleBtn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
};
export default Login;
