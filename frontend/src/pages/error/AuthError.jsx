import "./ErrorPage.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function AuthErrorPage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <div className="error-page">
      <div className="error-card">
        <div className="emoji">⚠️</div>

        <h1>Oops!</h1>
        <h1>{state?.status}</h1>

        <p>{state?.message}</p>

        <button onClick={() => navigate('/register')}>Register as User</button>
        <button onClick={() => navigate('/partner/register')}>Register as FoodPartner</button>
      </div>
    </div>
  );
}
