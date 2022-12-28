import ".././assets/css/error.css";
import logo from ".././assets/react.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error__card">
      <img className="logo" src={logo} alt="Vite Logo" />
      <h1>404 ERROR !!</h1>
      <p className="read-the-docs">Page Not Found</p>
      <button>
        <Link to="/">Go Back</Link>
      </button>
    </div>
  );
};

export default Error;
