import "./Auth.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PartnerLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post(
      "http://localhost:3000/api/auth/foodPartner/login",
      { email, password },
      {
        withCredentials: true,
      },
    );

    navigate("/createFood");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="emoji">🚀</div>

        <h1>Food Partner Login</h1>

        <p className="subtitle">Grow your business with us.</p>

        <div className="welcome-box">
          Deliver happiness and reach thousands of food lovers ❤️
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Business Email"
              required
            />
            <small>
              Enter the email associated with your restaurant account.
            </small>
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
            Login 🍜
          </button>
        </form>

        <div className="bottom-text">
          New Partner? <Link to="/partner/register">Register Here</Link>
        </div>
      </div>
    </div>
  );
}

export default PartnerLogin;
