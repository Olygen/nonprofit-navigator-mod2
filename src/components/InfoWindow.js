import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { useState } from "react";

export const InformationWindow = () => {
  const [mapRef, setMapRef] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();
  const markers = [
    { lat: 32.7682218, lng: -96.8609548, address: "2400 Lone Star Dr, Dallas, TX 75212" },
    { lat: 32.86205, lng: -97.01843, address: "4140 Valley View Ln, Irving, TX 75038" },
  ];

  const onMapLoad = (map) => {
    setMapRef(map);
    const bounds = new window.google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };

  const handleMarkerClick = (id, lat, lng, address) => {
    mapRef?.panTo({ lat, lng });
    setInfoWindowData({ id, address });
    setIsOpen(true);
  };

  return (
    <GoogleMap
      mapContainerClassName="map-container"
      onLoad={onMapLoad}
      onClick={() => setIsOpen(false)}
    >
      {markers.map(({ address, lat, lng }, ind) => (
        <Marker
          key={ind}
          position={{ lat, lng }}
          onClick={() => {
            handleMarkerClick(ind, lat, lng, address);
          }}
        >
          {isOpen && infoWindowData?.id === ind && (
            <InfoWindow
              onCloseClick={() => {
                setIsOpen(false);
              }}
            >
              <h3>{infoWindowData.address}</h3>
            </InfoWindow>
          )}
        </Marker>
      ))}
    </GoogleMap>
  );
};