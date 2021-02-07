import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import "./Maps.css";
import Button from "../ui-components/CustomButtons/Button.js";
import Popup from "./Popup";
import MapAppBar from "./MapsAppBar";


const Maps = () => {
  const [selected, setSelected] = useState({});
  const [data, setData] = useState([]);
  const [isRecommend, setIsRecommend] = useState(true);

  const user_cluster = Math.floor(Math.random() * (11 - 0 + 1)) + 0;
  console.log(user_cluster);

  const checkCluster = (cluster) => {
    return cluster === user_cluster;
  };

  useEffect(() => doRequest(), []);

  const doRequest = () => {
    let opts = {
      response: "ok",
    };
    fetch("/getData", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(opts),
    })
      .then((r) => {
        return r.json();
      })
      .then((resp) => {
        setData(resp.result);
      });
  };

  const onSelect = (item) => {
    setSelected(item);
  };

  const mapStyles = {
    height: "864px",
    width: "1536px",
  };

  const defaultCenter = {
    lat: 2.7832,
    lng: 28.5085,
  };

  return (
    <div className="maps-page">
      {isRecommend ? (
        <div>
          <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
          <MapAppBar></MapAppBar>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={3.3}
              center={defaultCenter}
            >
              {data.length &&
                data.map((person) => {
                  return (
                    <Marker
                      key={person.name}
                      position={person.Position}
                      onClick={() => onSelect(person)}
                    />
                  );
                })}
              {selected.Position && (
                <InfoWindow
                  position={selected.Position}
                  clickable={true}
                  onCloseClick={() => setSelected({})}
                >
                  {<Popup data={selected} />}
                </InfoWindow>
              )}
            </GoogleMap>
          </LoadScript>
        </div>
      ) : (
        <div>
          <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}>
          <MapAppBar></MapAppBar>
            <GoogleMap
              mapContainerStyle={mapStyles}
              zoom={3.3}
              center={defaultCenter}
            >
              {data.length &&
                data.map((person) => {
                  return checkCluster(person.Cluster) ? (
                    <Marker
                      key={person.name}
                      position={person.Position}
                      onClick={() => onSelect(person)}
                    />
                  ) : (
                    " "
                  );
                })}
              {selected.Position && (
                <InfoWindow
                  position={selected.Position}
                  clickable={true}
                  onCloseClick={() => setSelected({})}
                >
                  {<Popup data={selected} />}
                </InfoWindow>
              )}
              ;
            </GoogleMap>
          </LoadScript>
        </div>
      )}
      <div className="div-recommend-button">
        <Button
          className="recommend-button"
          onClick={() => setIsRecommend(prevState => !prevState)}
        >
          {isRecommend ? "Recommend" : "Default"}
        </Button>
      </div>
    </div>
  );
};

export default Maps;
