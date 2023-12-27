import { useState } from "react";
import { useNavigate, Link, redirect } from "react-router-dom";
import Social from "./social";
import or from "../../../assets/images/or.svg";
import "../../App.css";
import Copy from "./copy";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useDispatch, useSelector } from "react-redux";
import { register as authRegister } from "../utils/authSlicer";
import { register } from "../utils/action";
import Loader from "../utils/loader";

// import logo from '../../../assets/images/logo.png'

function Register() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);


  // State to store form input values
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const [errors, setErrors] = useState({ email: '', password: '', firstName: '', lastName: '' });

  // State to handle registration status
  const [registrationStatus, setRegistrationStatus] = useState("");

// Form Validation
const validateForm = () => {
  let isValid = true;
  let newErrors = { email: '', password: '', firstName: '', lastName: '' };

  if (!formData.email) {
    isValid = false;
    newErrors.email = 'Please enter a valid email.';
  }

  if (!formData.password) {
    isValid = false;
    newErrors.password = 'Please enter a valid password.';
  }

  if (!formData.firstName) {
    isValid = false;
    newErrors.firstName = 'Please enter a valid first name.';
  }

  if (!formData.lastName) {
    isValid = false;
    newErrors.lastName = 'Please enter a valid last name.';
  }

  setErrors(newErrors);
  return isValid;
};

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const [normal, setNormal] = useState("default");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // Form validation failed, do not proceed with submission
      return;
    }

    const email = formData.email;
    const firstname = formData.firstName;
    const lastname = formData.lastName;
    const password = e.target.password.value;

    setLoading(true)
    // Send registration data to the server (replace with your actual API endpoint)
    try {
      const response = await register(email, firstname, lastname, password);
      // console.log(response)

      if (response) {
        
        dispatch(authRegister({ token: response }));

        return redirect('/activation');
        setRegistrationStatus("Registration Successful");
        console.log(formData);
      } else {
        const errorData = await response.json();
        setRegistrationStatus(errorData.message);
        setNormal("destructive");
        
      }
    } catch (error) {
      console.error("Error:", error);
      setRegistrationStatus("Registration failed");
      setNormal("destructive");
      // return redirect('/activation');
    }setLoading(false)
  };

  return (
    <div>
      <div className="ctn h-screen justify-center flex flex-col bg-gray-100">
        <div className="from-wrapper w-full max-w-xl m-auto shadow-default bg-white rounded-lg border border-primary py-10 px-1">
          {/* <div className="logo-container">
                        <img src={logo} alt="Logo" className="w-20 h-20" />
                    </div> */}
          <div className="w-full max-w-sm m-auto">
            <div className="heading text-center">
              <h1 className="font-bold text-2xl">Create Account</h1>
              <p className="text-gray-400">
                Start your 30 day free trial. Cancel any time
              </p>
            </div>

            <div className="social-options">
              <Social msgG="Sign up with Google" msgF="Sign up with Facebook" />
            </div>

            <div className="or text-center">
              <img className="" src={or} alt="" />
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
                  {errors.email && <p className="text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="email">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  />
                  {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="email">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  />
                  {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
                </div>
                <div>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    onChange={handleInputChange}
                  />
                  {errors.password && <p className="text-red-500">{errors.password}</p>}
                </div>
                <div className="form-btn flex items-center justify-center">
                  <button
                    type="submit"
                    className="bg-black w-full text-white rounded-lg px-12 max-w-full my-5 py-2"
                    disabled={loading}
                  >
                    {loading ? <Loader /> : "Create Account"}
                  </button>
                </div>

                {registrationStatus && (
                  <Alert variant={normal}>
                    <AlertTitle>Status:</AlertTitle>
                    <AlertDescription>{registrationStatus}</AlertDescription>
                  </Alert>
                )}

                <p className="text-gray-400 text-center">
                  Already have an account?{" "}
                  <Link to="/login" className="login">
                    Login
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
}

export default Register;
