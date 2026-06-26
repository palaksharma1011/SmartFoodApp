import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileHeader from "../../components/UserProfile/ProfileHeader";
import ReelTabs from "../../components/UserProfile/ReelTabs";
import ReelGrid from "../../components/UserProfile/ReelGrid";

import {
  mockProfile,
  likedReelsData,
  savedReelsData,
} from "../../data/mockProfileData";

import "./FoodPartnerProfile.css";

const UserProfile = () => {
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
          //     "http://localhost:3000/api/food/getSaved",
          //     { withCredentials: true }
          // ),
          axios.get("http://localhost:3000/api/food/getLiked", {
            withCredentials: true,
          }),

          axios.get("http://localhost:3000/api/food/getSaved", {
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
      } catch (error) {
        console.log(error);
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
