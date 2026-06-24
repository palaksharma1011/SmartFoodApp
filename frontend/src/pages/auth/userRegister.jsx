import "./Auth.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PasswordField from "../../components/PasswordField";

function UserRegister() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/user/register",
        {
          username,
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
        <div className="emoji">🍟</div>

        <h1>Create Account</h1>
        <p className="subtitle">Join us and discover amazing food.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Full Name" name="username" />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Email Address" name="email" />
          </div>

          <PasswordField />

          <button className="auth-btn" type="submit">
            Register 🎉
          </button>
        </form>

        <div className="bottom-text">
          Already a user? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default UserRegister;
