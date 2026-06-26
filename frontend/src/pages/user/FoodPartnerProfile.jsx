import "./FoodPartnerProfile.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import {
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaHeart,
  FaFire,
} from "react-icons/fa";


function FoodPartnerProfile() {
  const { id } = useParams();

  const [profile, setProfile] = useState(null);
  const [videos, setVideos] = useState([]);
    const [foods, setFoods] = useState([]);

  useEffect(() => {
    axios
      .get(`https://smartfoodapp-backend.onrender.com/api/foodPartner/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setProfile(res.data.foodPartner)
        setFoods(res.data.foodPartner.allFood)

        console.log(res.data);
        console.log(res.data.foodPartner.allFood)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <main>
      <div className="foodPartnerPage">
        {/* Partner Card */}
        <div className="partnerCard">
          <div className="partnerTop">
            <div className="partnerLogo">🌶️</div>

            <div className="partnerInfo">
              <h2>{profile?.name}</h2>

              <p>
                <FaMapMarkerAlt />
                {profile?.address}
              </p>

              <div className="statusBadge">Open • 30 mins delivery</div>
            </div>
          </div>

          <div className="statsContainer">
            <div className="statBox">
              <FaFire />
              <h3>43</h3>
              <span>Total Meals</span>
            </div>

            <div className="statBox">
              <FaStar />
              <h3>4.8</h3>
              <span>Rating</span>
            </div>

            <div className="statBox">
              <FaHeart />
              <h3>15K</h3>
              <span>Lovers</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="dividerCircle">🌶️</div>

        {/* video grid  */}

        <div className="videoGrid">
          {foods.map((food) => (
            <div className="videoCard" key={food?._id}>
              <div className="videoContainer">
                <video src={food.video} muted preload="metadata" playsInline />

                <div className="tag">{food.tag}</div>

                <div className="playBadge">▶</div>
              </div>

              <div className="videoContent">
                <h4>{food.name}</h4>

                <p className="description">{food.description}</p>

                <div className="bottomRow">
                  <span className="views">👁 {food.views}</span>

                  <button>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default FoodPartnerProfile;
