import { useState } from "react";

function PasswordField() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordsMatch = password.length > 0 && password === confirmPassword;

  return (
    <>
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

      <div className="form-group">
        <label>Confirm Password</label>

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      {confirmPassword.length > 0 && (
        <p
          className={
            passwordsMatch ? "password-match success" : "password-match error"
          }
        >
          {passwordsMatch ? "✅ Passwords match" : "❌ Passwords do not match"}
        </p>
      )}
    </>
  );
}

export default PasswordField;
