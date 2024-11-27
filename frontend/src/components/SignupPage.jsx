import { Link, useNavigate } from "react-router-dom";
import "./SignupPage.css";

function SignupPage () {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/home')
    };
    return (
        <div className="signupform-container">
          <form className="login-form">
            <h2>SignUp</h2>
            <div className="underline"></div>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                name="username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"

                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm Password:</label>
              <input
                type="password"
                name="confirmPassword"
                required
              />
            </div>
            <button type="submit" onClick={handleSubmit}>SignUp</button>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      );
};
export default SignupPage;