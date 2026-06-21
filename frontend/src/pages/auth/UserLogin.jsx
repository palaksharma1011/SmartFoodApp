import "./Auth.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function UserLogin() {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
   
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const response = await axios.post(
      "http://localhost:3000/api/auth/user/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      },
    );

    navigate("/");
  };
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="emoji">🍕</div>

        <h1>Welcome Back!</h1>
        <p className="subtitle">Sign in and order your favourite meals.</p>

        <div className="welcome-box">
          Hungry again? We've got delicious food waiting for you ❤️
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter your email" />
          </div>

      <div className="form-group">
        <label>Password</label>

        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="button"
            className="toggle-btn"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈 Hide" : "👁 Show"}
          </button>
        </div>
      </div>

          <button className="auth-btn" type="submit">
            Login 🍔
          </button>
        </form>

        <div className="bottom-text">
          New here? <Link to="/user/register">Register Now</Link>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
