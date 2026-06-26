const ProfileHeader = ({ profile }) => {
  if (!profile) return null;

  return (
    <div className="foodieProfileHeroCard">
      <img src="/svg/profile.svg" alt="" className="foodieProfileAvatar" />

      <div className="foodieProfileHeroContent">
        <h1>{profile.username}</h1>

        <p>{profile.email}</p>

        {/* <div className="foodieProfilePrefGrid">
          <div>
            <span>Cuisine</span>
            <strong>{profile.preferences.cuisine}</strong>
          </div>

          <div>
            <span>Spice</span>
            <strong>{profile.preferences.spiceLevel}</strong>
          </div>

          <div>
            <span>Diet</span>
            <strong>{profile.preferences.diet}</strong>
          </div>

          <div>
            <span>Dessert</span>
            <strong>{profile.preferences.dessert}</strong>
          </div>
        </div> */}

        {/* <p className="foodieProfileBio">{profile.bio}</p> */}
      </div>
    </div>
  );
};

export default ProfileHeader;
