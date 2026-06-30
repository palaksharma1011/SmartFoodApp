import "../../app/App.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaHeart,
  FaFire,
} from "react-icons/fa";
import api from "../../api/axios";

function FoodPartnerProfile() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [profile, setProfile] = useState(null);
  const [videos, setVideos] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    api
      .get(`/foodPartner/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setProfile(res.data.foodPartner);
        setFoods(res.data.foodPartner.allFood);

        console.log(res.data);
        console.log(res.data.foodPartner.allFood);
      })
      .catch((err) => {
        console.log(err);
        navigate("/error", {
          state: {
            status: err.response?.status,
            message: err.response?.data?.message,
          },
        });
      });
  }, [id]);

  return (
    <main>
      <div className="min-h-screen bg-gradient-to-b from-[#ffefcb] to-[#fff7ec] p-4 md:p-5">
        {/* Partner Card */}
        <div className="rounded-[32px] bg-gradient-to-br from-[#ff4040] to-[#ff7b00] p-6 text-white shadow-[0_15px_35px_rgba(255,88,0,0.25)]">
          <div className="flex items-center gap-4">
            <div className="flex h-[75px] w-[75px] items-center justify-center rounded-full bg-white/20 text-[32px]">
              🌶️
            </div>

            <div className="flex-1">
              <h2 className="mb-2 text-xl md:text-2xl font-bold">
                {profile?.name}
              </h2>

              <p className="flex items-center gap-2 text-sm opacity-95">
                <FaMapMarkerAlt />
                {profile?.address}
              </p>

              <div className="mt-3 w-fit rounded-full bg-white/20 px-4 py-2 text-sm backdrop-blur-md">
                Open • 30 mins delivery
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 flex gap-3">
            <div className="flex-1 rounded-[20px] bg-white/15 p-4 text-center backdrop-blur-md">
              <FaFire className="mx-auto mb-2 text-xl" />
              <h3 className="text-xl font-bold">43</h3>
              <span className="text-xs">Total Meals</span>
            </div>

            <div className="flex-1 rounded-[20px] bg-white/15 p-4 text-center backdrop-blur-md">
              <FaStar className="mx-auto mb-2 text-xl" />
              <h3 className="text-xl font-bold">4.8</h3>
              <span className="text-xs">Rating</span>
            </div>

            <div className="flex-1 rounded-[20px] bg-white/15 p-4 text-center backdrop-blur-md">
              <FaHeart className="mx-auto mb-2 text-xl" />
              <h3 className="text-xl font-bold">15K</h3>
              <span className="text-xs">Lovers</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-auto -mt-6 mb-5 flex h-[55px] w-[55px] items-center justify-center rounded-full bg-white text-2xl shadow-lg">
          🌶️
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {foods.map((food) => (
            <div
              key={food?._id}
              className="overflow-hidden rounded-[24px] bg-white shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-1.5"
            >
              <div className="relative">
                <video
                  src={food.video}
                  muted
                  preload="metadata"
                  playsInline
                  className="h-[320px] w-full bg-black object-cover pointer-events-none"
                />

                <div className="absolute left-3 top-3 rounded-full bg-[#ffd000] px-3 py-1.5 text-xs font-semibold text-black">
                  {food.tag}
                </div>

                <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-xl text-white backdrop-blur-md">
                  ▶
                </div>
              </div>

              <div className="p-4">
                <h4 className="mb-2 text-base font-semibold text-[#222]">
                  {food.name}
                </h4>

                <p
                  className="
                mb-4
                overflow-hidden
                text-sm
                leading-6
                text-gray-600
                [display:-webkit-box]
                [-webkit-box-orient:vertical]
                [-webkit-line-clamp:2]
              "
                >
                  {food.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">👁 {food.views}</span>

                  <button
                    className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-[14px]
                  bg-gradient-to-br
                  from-[#ff4040]
                  to-[#ff8800]
                  text-2xl
                  text-white
                  transition
                  hover:scale-105
                  active:scale-95
                "
                  >
                    +
                  </button>
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
