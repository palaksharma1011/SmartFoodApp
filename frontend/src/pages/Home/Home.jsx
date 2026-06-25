import React from "react";
import FoodStream from "./FoodStream.jsx";

const Home = () => {
  return (
    <main>
      <section className="header">
        <div className="UserProfile">
          <img src="/svg/profile.svg" alt="Profile" />
          <p>Profile</p>
        </div>
        <div className="AI">
          <img src="/svg/AI.svg" alt="AI" />
          <p>AI</p>
        </div>
      </section>
      <FoodStream />
    </main>
  );
};

export default Home;
