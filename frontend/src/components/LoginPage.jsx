import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/home')
    };

    return (
        <div className="loginform-container">
          <form className="login-form">
            <h2>Login</h2>
            <div className="underline"></div>
            <div className="form-group">
              <label htmlFor="email">Username</label>
              <input
                type="text"
                name="username"
                required
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                required
              />
            </div>
            <button type="submit" onClick={handleSubmit}>Login</button>
            <p>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      );

};
export default LoginPage;