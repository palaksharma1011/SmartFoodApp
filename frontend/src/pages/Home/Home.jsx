import React from "react";
import FoodStream from "./FoodStream.jsx";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <main>
      <section className="header">
        <div className="UserProfile">
          <button onClick={() => navigate("/user/profile")}>
            <img src="/svg/profile.svg" alt="Profile" />
            <p>Profile</p>
          </button>
        </div>
        <div className="AI">
          <button onClick={() => navigate("/user/profile")}>
            <img src="/svg/AI.svg" alt="AI" />
            <p>AI</p>
          </button>
        </div>
      </section>
      <FoodStream />
    </main>
  );
};

export default Home;
