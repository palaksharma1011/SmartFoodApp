import "./Auth.css";
import { Link } from "react-router-dom";
import api from '../../api/axios';
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

    try {
      const response = await api.post(
        "/auth/user/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );

      navigate("/");
    } catch (err) {
      navigate("/error", {
        state: {
          status: err.response?.status,
          message: err.response?.data?.message,
        },
      });
    }
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
          New here? <Link to="/register">Register Now</Link>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
