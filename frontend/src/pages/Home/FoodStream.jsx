import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import SaveButton from "../../components/SaveButton";
import LikeButton from "../../components/LikeButton";

export default function FoodStream() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState(0);


  const navigate = useNavigate();

  //   for connecting to backend

  useEffect(() => {
    api
      .get("/food/allFoods", { withCredentials: true })
      .then((response) => {
        setVideos(response.data.foods);
      })

      .catch((err) => {
        console.log(err);
        navigate("/autherror", {
          state: {
            status: err.response?.status,
            message: err.response?.data?.message,
          },
        });
      });
  }, []);
  const currentVideo = videos[index];

  // for current video
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [index]);

  const nextVideo = () => {
    setDirection(1);

    setIndex((prev) => {
      if (videos.length === 0) return prev;
      return (prev + 1) % videos.length;
    });
  };

  const previousVideo = () => {
    setDirection(-1);

    setIndex((prev) => {
      if (videos.length === 0) return prev;

      return prev === 0 ? videos.length - 1 : prev - 1;
    });
  };

  // Mouse wheel support

  useEffect(() => {
    let isAnimating = false;

    const handleWheel = (e) => {
      if (isAnimating) return;

      isAnimating = true;

      if (e.deltaY > 0) {
        nextVideo();
      } else {
        previousVideo();
      }

      setTimeout(() => {
        isAnimating = false;
      }, 500);
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [videos]);

  // Touch support

  let startY = 0;

  const handleTouchStart = (e) => {
    startY = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const endY = e.changedTouches[0].clientY;

    if (startY - endY > 50) {
      nextVideo();
    }

    if (endY - startY > 50) {
      previousVideo();
    }
  };
  if (!currentVideo) {
    return;
  }

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-black"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentVideo._id}
          className="absolute h-screen w-full"
          initial={{
            y: direction > 0 ? "100%" : "-100%",
          }}
          animate={{
            y: 0,
          }}
          exit={{
            y: direction > 0 ? "-100%" : "100%",
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <video
            ref={videoRef}
            src={currentVideo.video}
            muted
            autoPlay
            playsInline
            loop
            className="h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

          {/* Info Card */}
          <div
            className="
          absolute
          bottom-4
          left-3
          right-3
          md:bottom-7
          md:left-5
          md:right-5
          max-w-[700px]
          rounded-[20px]
          md:rounded-[30px]
          bg-white/10
          p-4
          md:p-5
          text-white
          backdrop-blur-md
        "
          >
            <h2 className="mb-2 text-[22px] font-bold md:text-[28px]">
              😋 {currentVideo.name}
            </h2>

            <p className="text-sm leading-relaxed opacity-90 md:text-base">
              {currentVideo.description}
            </p>

            <Link to={"/foodPartner/" + currentVideo.foodPartner._id}>
              <span
                className="
              mt-3
              block
              rounded-xl
              p-1
              text-sm
              font-semibold
              text-white
              md:text-base
            "
              >
                by {currentVideo.foodPartner.name}
              </span>
            </Link>

            <button
              className="
            mt-5
            w-[80%]
            rounded-full
            bg-gradient-to-br
            from-red-600
            to-pink-400
            px-5
            py-4
            text-base
            font-bold
            text-white
            shadow-[0_10px_30px_rgba(255,77,79,0.5)]
            transition
            hover:scale-[1.02]
            active:scale-95
          "
            >
              Order Now
            </button>

            {/* Actions */}
            <div
              className="
    fixed
    right-2
    md:right-5
    top-1/2
    z-[100]
    flex
    -translate-y-1/2
    flex-col
    items-center
    gap-1
          "
            >
              <LikeButton foodId={currentVideo._id} name="like" />

              <div className="mb-2 text-xs font-medium text-white">
                {currentVideo.likeCount}
              </div>

              <SaveButton foodId={currentVideo._id} name="save" />

              <div className="mb-2 text-xs font-medium text-white">
                {currentVideo.saveCount}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
