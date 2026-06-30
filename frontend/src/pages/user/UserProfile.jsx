import React, { useState, useEffect } from "react";
import api from "../../api/axios";
import ProfileHeader from "../../components/UserProfile/ProfileHeader";
import ReelTabs from "../../components/UserProfile/ReelTabs";
import ReelGrid from "../../components/UserProfile/ReelGrid";
import { useNavigate } from "react-router-dom";
import "./FoodPartnerProfile.css";

const UserProfile = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("liked");
  const [profile, setProfile] = useState(null);

  const [likedReels, setLikedReels] = useState([]);

  const [savedReels, setSavedReels] = useState([]);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const [
          // profileRes,
          likedRes,
          savedRes,
        ] = await Promise.all([
          // axios.get(
          //     "https://smartfoodapp-backend.onrender.com/api/food/getSaved",
          //     { withCredentials: true }
          // ),
          api.get("/food/getLiked", {
            withCredentials: true,
          }),

          api.get("/food/getSaved", {
            withCredentials: true,
          }),
        ]);

        // setProfile(
        //     profileRes.data.user
        // );
        // setProfile(mockProfile);

        setLikedReels(likedRes.data.likedFoods);

        setSavedReels(savedRes.data.savedFoods);
        setProfile(likedRes.data.userData);

        console.log(likedRes.data.userData);
        console.log(likedRes.data);

        console.log(savedRes.data);
      } catch (err) {
        console.log(err);
        navigate("/error", {
          state: {
            status: err.response?.status,
            message: err.response?.data?.message,
          },
        });
      }
    };

    fetchProfileData();
  }, []);
  const reelsToRender = activeTab === "liked" ? likedReels : savedReels;

  return (
    <div className="foodieProfileShell">
      <ProfileHeader profile={profile} />

      <ReelTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedCount={savedReels.length}
      />

      <ReelGrid reels={reelsToRender} />
    </div>
  );
};

export default UserProfile;
