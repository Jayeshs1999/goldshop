import React, { useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import useDeviceType from "../../utils/DeviceType";

// Replace these with your actual values
const CHANNEL_ID = "UC4-Yi25Cn_p1YRRjBOy4wSA";
const API_KEY = "AIzaSyDrP29mHWfvbmTpAuwCkD1seKPqH0NLJWw";

const YouTubeEmbed = () => {
  const navigate = useNavigate();
  const [videoList, setVideoList] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const deviceType = useDeviceType();
  useEffect(() => {
    // Step 1: Get uploads playlist ID
    fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.items || !data.items[0]) {
          setError("Channel not found or API quota exceeded.");
          setLoading(false);
          return;
        }
        const uploadsPlaylistId =
          data.items[0].contentDetails.relatedPlaylists.uploads;
        // Step 2: Get videos from uploads playlist
        fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${uploadsPlaylistId}&key=${API_KEY}`
        )
          .then((res) => res.json())
          .then((data) => {
            if (!data.items) {
              setError("No videos found or API quota exceeded.");
              setLoading(false);
              return;
            }
            const ids = data.items.map(
              (item: any) => item.snippet.resourceId.videoId
            );
            setVideoList(ids);
            setLoading(false);
          })
          .catch(() => {
            setError("Failed to fetch videos.");
            setLoading(false);
          });
      })
      .catch(() => {
        setError("Failed to fetch channel info.");
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
        padding: "40px 0",
      }}
    >
      <div
        style={{
          // maxWidth: "1000px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "18px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
          padding: "32px 24px",
          width: deviceType === "mobile" ? "100%" : "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
          }}
        >
          {/* <ArrowBackIcon
            onClick={() => navigate("/")}
            style={{
              cursor: "pointer",
              color: "#6366f1",
              fontSize: "2rem",
              transition: "color 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#4338ca")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#6366f1")}
          /> */}
          <h2
            style={{
              margin: 0,
              fontWeight: 700,
              fontSize: "2rem",
              color: "#1e293b",
              letterSpacing: "0.02em",
            }}
          >
            Our Videos
          </h2>
        </div>
        {loading ? (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            Loading videos...
          </div>
        ) : error ? (
          <div style={{ color: "red", textAlign: "center", padding: "40px 0" }}>
            {error}
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                deviceType === "mobile"
                  ? "1fr"
                  : deviceType === "tablet" || deviceType === "small-tablet"
                  ? "1fr 1fr "
                  : "1fr 1fr 1fr",
              gap: "28px",
            }}
          >
            {videoList.map((id, idx) => (
              <div
                key={id}
                style={{
                  background: "#f1f5f9",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  padding: "12px",
                  transition: "transform 0.2s, box-shadow 0.2s",
                  cursor: "pointer",
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "scale(1.03)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 6px 24px rgba(99,102,241,0.12)";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "scale(1)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 2px 8px rgba(0,0,0,0.04)";
                }}
              >
                <iframe
                  width="100%"
                  height="190"
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`YouTube video player ${idx + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    borderRadius: "8px",
                    width: "100%",
                    height: "190px",
                    border: "none",
                    background: "#000",
                  }}
                ></iframe>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default YouTubeEmbed;
