import React from 'react';
import { useSelector } from "react-redux";
import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet'
import Zoom from '../helpers/Zoom';


const Map = () => {
    const {points} = useSelector((state) => state);
    const [point, setPoint] = React.useState(null);

    const pointArr = point?.point.map(item => [item.geocode[0], item.geocode[1]])
    const polyline = point?.polyline

    React.useEffect(() => {
        const point = points.find(e=> e.active === true)
        setPoint(point)
    }, [points]);


    return (
        <MapContainer center={[59.82934196, 30.38064206]} zoom={10} scrollWheelZoom={true} bounds={pointArr}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {polyline && 
            <>
            <Zoom bounds={pointArr} /> 
            <Polyline color={"lime"} opacity={0.7} weight={4} positions={polyline}>
                <Popup>Маршрут</Popup>
            </Polyline> 
            {point?.point.map(el => (
                <Marker key={el.geocode} position={el.geocode}>
                    <Popup>{el.popUp}</Popup>
                </Marker>
            ))}
            </>
            }
        </MapContainer>
    )
}
export default Map