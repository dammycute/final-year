import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../App.css";
import Copy from "./copy";
import Social from "./social";
// import logo from '../../assets/images/logo.png'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useDispatch, useSelector } from "react-redux";
import { login as authLogin } from "../utils/authSlicer";
import { login } from "../utils/action";
import Loader from "../utils/loader";

const Login = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // console.log(isAuthenticated, user);
  // State to store form input values
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [normal, setNormal] = useState("default");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to control password visibility

  const [loginStatus, setLoginStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = formData.email;
    const password = formData.password;

    if (!formData.email || !formData.password) {
      setLoginStatus("Please enter both email and password.");
      return;
    }

    setLoading(true);

    // Send login data to the server (replace with your actual API endpoint)
    try {
      const response = await login(email, password);
      console.log(response);

      if (response) {
        // const userDetails = await response.json();
        console.log("FELIX");
        dispatch(authLogin({ payload: response }));

        // Redirect to the dashboard or home page after successful login

        navigate("/");
      } else {
        setLoginStatus("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error:", error);
      setLoginStatus("Login failed. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="ctn h-screen justify-center flex flex-col bg-gray-100">
        <div className="from-wrapper  w-full max-w-xl m-auto shadow-default bg-white rounded-lg border border-primary py-10 px-1">
          {/* <div className="logo-container">
                        <img src={logo} alt="Logo" className="w-20 h-20" />
                    </div> */}
          <div className="w-full max-w-sm m-auto">
            <div className="heading text-center">
              <h1 className="font-bold text-2xl">Login</h1>
              <p className="text-gray-400">
                Input your email and password to Log in
              </p>
            </div>

            <div className="social-options">
              <Social msgG="Sign up with Google" msgF="Sign up with Facebook" />
            </div>

            <div className="form">
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  />
                </div>
                <div>
                  <label htmlFor="password">Password:</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={formData.password}
                      className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      onChange={handleInputChange}
                    />
                    <span
                      className="absolute right-3 top-2 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </span>
                  </div>
                </div>
                {loginStatus && (
                  <Alert variant={normal}>
                    <AlertTitle>Status:</AlertTitle>
                    <AlertDescription>{loginStatus}</AlertDescription>
                  </Alert>
                )}
                <div className="form-btn flex items-center justify-center">
                  <button
                    type="submit"
                    className="bg-black text-white rounded-lg px-12 max-w-full my-5 py-2"
                  >
                    {loading ? <Loader /> : "Login"}
                  </button>
                </div>
                <p className="text-gray-400 text-center">
                  Don't have an account?{" "}
                  <Link to="/register" className="register">
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <Copy />
      </div>
    </div>
  );
};

export default Login;
