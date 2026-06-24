import "./ErrorPage.css";
import { useNavigate, useLocation } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <div className="error-page">
      <div className="error-card">
        <div className="emoji">⚠️</div>

        <h1>Oops!</h1>
        <h1>{state?.status}</h1>

        <p>{state?.message}</p>

        <button onClick={() => navigate(-1)}>Try Again</button>
      </div>
    </div>
  );
}
