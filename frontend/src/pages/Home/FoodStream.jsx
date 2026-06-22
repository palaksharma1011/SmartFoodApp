import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import videos from "../../data/videos";
import "./FoodStream.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function FoodStream() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [videos, setVideos] = useState([]);

  //   for connecting to backend

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/food/allFoods", { withCredentials: true })
      .then((response) => {
        setVideos(response.data.foods);
      })
      .catch((err) => {
        console.log(err);
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
  console.log("Index =", index);
  console.log("Videos length =", videos.length);

  if (currentVideo) {
    console.log("Current =", currentVideo.name);
  }
  if (!currentVideo) {
    return;
  }

  return (
    <div
      className="container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentVideo._id}
          className="page"
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
          />

          <div className="overlay" />

          <div className="card">
            <h2>😋 {currentVideo.name}</h2>

            <p>{currentVideo.description}</p>
            <Link
              className=""
              to={"/foodPartner/" + currentVideo.foodPartner._id}
            >
              <span>by {currentVideo.foodPartner.name}</span>
            </Link>

            <button>Order Now</button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
