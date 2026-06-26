const ReelCard = ({ reel }) => {
  return (
    <div className="foodieReelCard">
      <video
        src={reel.video}
        muted
        preload="metadata"
        playsInline
        className="foodieReelVideo"
      />

      <div className="foodieReelOverlay">
        <h4>{reel.name}</h4>

        <div className="foodieReelStats">
          <span>❤️ {reel.likeCount}</span>

          <span>👁 {reel.saveCount}</span>
        </div>
      </div>
    </div>
  );
};

export default ReelCard;
