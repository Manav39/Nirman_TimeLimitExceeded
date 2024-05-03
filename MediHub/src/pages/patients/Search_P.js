import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import your JSON data
import placesData from "../../constants/pharmacy.json";

const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Create a map instance
    const map = L.map(mapRef.current).setView([28.6139, 77.209], 10);

    // Add a tile layer (e.g., OpenStreetMap)
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add markers for places
    placesData.forEach((place) => {
      const marker = L.marker([place.location.lat, place.location.lng]).addTo(
        map
      );
      const popupContent = `
        <div>
          <h3>${place.name}</h3>
          <p>${place.address}</p>
          <p>Rating: ${place.rating}</p>
          <p>Distance: ${place.distanceMeter} meters</p>
        </div>
      `;
      marker.bindPopup(popupContent);
    });

    // Clean up the map instance on unmount
    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapRef} style={{ height: "500px" }} />;
};

export default Map;
