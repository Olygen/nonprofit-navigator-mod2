import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./App.css";

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const center = useMemo(() => ({ lat: 32.779167, lng: -96.808891 }), []);

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        >
          <Marker position={{ lat: 32.779167, lng: -96.808891 }} />
        </GoogleMap>
      )}
    </div>
  );

  /*return (
    <div className="App">
      <header className="App-header">
       <h1>Nonprofit Navigator</h1>
      </header>
    </div>
  );*/
  }
export default App;
