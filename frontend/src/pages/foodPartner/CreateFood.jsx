import { useState } from "react";
import "./CreateFood.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export default function CreateFood() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState("");
  const [videoName, setVideoName] = useState("");
  const navigate = useNavigate();

  const handleVideoChange = (e) => {
    if (e.target.files[0]) {
      setVideo(e.target.files[0]);
      setVideoName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("video", video);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/food/",
        formData,
        { withCredentials: true },
      );
      console.log(response);
    } catch (err) {
      navigate("/error", {
        state: {
          status: err.response?.status,
          message: err.response?.data.message,
        },
      });
    }
  };

  return (
    <div className="food-page">
      <div className="floating-circle circle1"></div>
      <div className="floating-circle circle2"></div>
      <div className="floating-circle circle3"></div>

      <form className="food-card" onSubmit={handleSubmit}>
        <div className="header">
          <div className="emoji">🍕</div>
          <h1>Create Food Item</h1>
          <p>Add your delicious dishes and reach thousands of customers.</p>
        </div>

        <div className="form-group">
          <label>🍔 Food Name</label>
          <input
            type="text"
            placeholder="Ex: Cheese Burst Pizza"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>🎥 Upload Food Video</label>

          <label className="upload-box">
            <input type="file" accept="video/*" onChange={handleVideoChange} />
            <div className="upload-content">
              <div className="upload-icon">📹</div>

              {video ? (
                <>
                  <h3>{videoName}</h3>
                  <span>Video selected successfully</span>
                </>
              ) : (
                <>
                  <h3>Drag & Drop Video Here</h3>
                  <span>MP4, MOV supported</span>
                </>
              )}
            </div>
          </label>
        </div>

        <div className="form-group">
          <label>✨ Description</label>
          <textarea
            rows="5"
            placeholder="Describe ingredients, taste, special features..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button className="publish-btn" type="submit">
          🚀 Publish Food Item
        </button>

        <div className="food-icons">🍔 🍟 🌮 🍕 🍩</div>
      </form>
    </div>
  );
}
