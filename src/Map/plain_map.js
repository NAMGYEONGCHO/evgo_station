import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FvbjgxMTkiLCJhIjoiY2xoN2NnYnV1MGRhMTNsbzZrc2JwbTg5YyJ9.ZF0NjPUYl_k40X1PQdv2mw';
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [52.520008, 13.404954],
      zoom: 3,
    });

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />;
};

export default Map;