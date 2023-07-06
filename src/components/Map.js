import React, { useEffect } from "react";

function Map() {
  useEffect(() => {
    const API_KEY = "AIzaSyCQvWNYpSR8GiVIqltJn-xQP_r_hRZ9uSQ"; // Replace with your actual API key
    const preferredLocation = { lat: 26.9124, lng: 75.7873 }; // Example: New York City coordinates

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      const mapOptions = {
        center: preferredLocation,
        zoom: 12
      };
      const map = new window.google.maps.Map(
        document.getElementById("map"),
        mapOptions
      );
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div id="map" style={{ width: "100%", height: "400px" }}>
      {/* Map container */}
    </div>
  );
}

export default Map;
