import { useContext } from "react";
import { AuthStatus } from "../context/ContextProvider";
import { Link , useNavigate} from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import "./Navbar.css";

const Navbar = () => {
  let navigate = useNavigate();
  const auth = getAuth();

  const { authData, setAuthData } = useContext(AuthStatus);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setAuthData(false);
    });
    navigate("/login");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <span className="logo">Blogs</span>
      </Link>

      <div className="pages">
        {!authData ? (
          <Link to="/login">
            <span className="page">Login</span>
          </Link>
        ) : (
          <>
            <Link to="/">
              <span className="page">Home</span>
            </Link>
            <Link to="/createPost">
              <span className="page">Create Post</span>
            </Link>
            <span className="page" onClick={signUserOut}>
              Log Out
            </span>
          </>
        )}
      </div>
    </div>
  );
};
export default Navbar;
