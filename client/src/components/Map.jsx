import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { FaMapMarkedAlt } from "react-icons/fa";

function ClickMarker({ onClick }) {
  const [position, setPosition] = useState(null);

  useMapEvents({
    async click(e) {
      const { lat, lng } = e.latlng;
      setPosition(e.latlng);

      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
        );
        const data = await res.json();
        const address = data.display_name || "Address not found";
        if (onClick) onClick(address, e.latlng);
      } catch (error) {
        console.error("Reverse geocoding failed:", error);
        if (onClick) onClick("Error retrieving address", e.latlng);
      }
    },
  });

  return position ? <Marker position={position} /> : null;
}

export default function Map({ handleMapClick }) {
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCurrentPosition([
          position.coords.latitude,
          position.coords.longitude,
        ]);
      },
      (error) => {
        console.error("Geolocation error:", error);
        // Fallback to Manila
        setCurrentPosition([14.5995, 120.9842]);
      }
    );
  }, []);

  return (
    <>
      <div className="border z-0" style={{ height: "300px", width: "100%" }}>
        {currentPosition && (
          <MapContainer
            center={currentPosition}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ClickMarker onClick={handleMapClick} />
          </MapContainer>
        )}
        {!currentPosition && (
          <div className="w-full h-full  flex gap-4 justify-center items-center animate-pulse">
            <FaMapMarkedAlt className="text-6xl" />
          </div>
        )}
      </div>
    </>
  );
}
