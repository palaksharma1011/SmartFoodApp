import ReelCard from "./ReelCard";

const ReelGrid = ({ reels }) => {


  if (!reels.length) {
    return (
      <div className="foodieEmptyState">
        No reels available
      </div>
    );
  }

  return (
    <div className="foodieReelsGrid">

      {reels.map((reel) => (
        <ReelCard
          key={reel._id}
          reel={reel.food}
        />
      ))}

    </div>
  );
};

export default ReelGrid;