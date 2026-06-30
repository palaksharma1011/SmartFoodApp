import PasswordField from "../../components/PasswordField";
import "./Auth.css";
import { Link } from "react-router-dom";
import api from '../../api/axios';
import { useNavigate } from "react-router-dom";

function PartnerRegister() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const contactName = e.target.contactName.value;
    const password = e.target.password.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;

    try {
      const response = await api.post(
        "/auth/foodPartner/register",
        {
          name,
          email,
          contactName,
          password,
          address,
          phone,
        },
        { withCredentials: true },
      );

      navigate("/createFood");
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
        <div className="emoji">🏪</div>

        <h1>Become our Food Partner</h1>

        <p className="subtitle">Start serving more customers today.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Business Name</label>
            <input
              type="text"
              placeholder="Business Name"
              name="name"
              required
              minLength="3"
            />
            <small>The registered Business name.</small>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Business Email"
              name="email"
              required
            />
            <small>We'll use this email for login and important updates.</small>
          </div>

          <div className="form-group">
            <label>City</label>
            <input type="text" placeholder="Your City" name="city" />
            <small>The city where your restaurant operates.</small>
          </div>

          <div className="form-group">
            <label>Contact Name</label>
            <input
              type="text"
              placeholder="Primary Contact Person"
              name="contactName"
              required
              minLength="3"
            />
            <small>
              The person we should contact regarding orders and support.
            </small>
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="10-digit Phone Number"
              name="phone"
              required
              pattern="[0-9]{10}"
            />
            <small>Enter a valid 10-digit phone number.</small>
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea
              placeholder="Complete Restaurant Address"
              name="address"
              required
              rows="4"
            />
            <small>
              Provide the complete address where your restaurant is located.
            </small>
          </div>

          <PasswordField />

          <button className="auth-btn" type="submit">
            Register 🚀
          </button>
        </form>

        <div className="bottom-text">
          Already a Partner? <Link to="/partner/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default PartnerRegister;
