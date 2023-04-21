import { GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

function BlueMarker() {
const center = useMemo(() => ({ lat: 32.7682218, lng: -96.8609548 }), []);
  return (
    <div className="App">
      : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        >
          <Marker position={{ lat: 32.7682218, lng: -96.8609548 }} icon={"https://www.gstatic.com/earth/images/stockicons/190201-2016-animal-paw_4x.png"} />
        </GoogleMap>
      )
    </div>
  );
};

export default BlueMarker;

/*export default App;
const BlueMarker = () => {
  const markers = [
    { lat: 32.7682218, lng: -96.8609548 },
    { lat: 32.86205, lng: -97.01843 },
  ];
  return (
    <GoogleMap mapContainerClassName="map-container" zoom={14}>
      {markers.map(({ lat, lng }) => (
        <Marker
          position={{ lat, lng }}
          icon={"https://www.gstatic.com/earth/images/stockicons/190201-2016-animal-paw_4x.png"}
        />
      ))}
    </GoogleMap>
  );
};

export default BlueMarker;




/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
</svg>*/

