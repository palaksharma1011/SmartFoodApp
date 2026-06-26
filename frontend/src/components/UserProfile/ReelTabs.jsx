const ReelTabs = ({ activeTab, setActiveTab, savedCount }) => {
  return (
    <div className="foodieProfileTabsBar">
      <div className="foodieProfileTabs">
        <button
          className={activeTab === "liked" ? "foodieActiveTab" : ""}
          onClick={() => setActiveTab("liked")}
        >
          ❤️ Liked Reels
        </button>

        <button
          className={activeTab === "saved" ? "foodieActiveTab" : ""}
          onClick={() => setActiveTab("saved")}
        >
          🔖 Saved Foods
        </button>
      </div>

      {activeTab === "saved" && (
        <button className="foodieCheckoutBtn">Checkout ({savedCount})</button>
      )}
    </div>
  );
};

export default ReelTabs;
