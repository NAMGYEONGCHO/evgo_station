/* import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { useQuery } from "react-query";
import "mapbox-gl/dist/mapbox-gl.css";

const fetchStations = async () => {
  const response = await fetch("API_URL");
  return response.json();
};

const Map = () => {
  const mapContainer = useRef(null);

  const { data: stations, isLoading } = useQuery("stations", fetchStations);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [52.520008, 13.404954],
      zoom: 3,
    });

    const addStationsToMap = () => {
      stations.forEach((station) => {
        // Add a marker for each station on the map
        new mapboxgl.Marker()
          .setLngLat([52.520008, 13.404954])
          .addTo(map);
      });
    };

    if (!isLoading) {
      addStationsToMap();
    } 

    return () => map.remove();
  }, [isLoading, stations]);

  return <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />;
};

export default Map; */



