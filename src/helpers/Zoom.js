import { useMap } from "react-leaflet";
import { useEffect } from "react";

const Zoom = ({ bounds }) => {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(bounds);
  }, [map, bounds]);
};

export default Zoom;