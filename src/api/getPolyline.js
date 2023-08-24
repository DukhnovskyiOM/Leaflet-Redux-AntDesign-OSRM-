import axios from "axios";

export async function getPolyline (pointString) {
    try {
        const response = await axios.get(`http://router.project-osrm.org/route/v1/driving/${pointString}?steps=true&geometries=geojson&overview=full`)
        return response;
      } catch (error) {
        alert(error)
      }

}