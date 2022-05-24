import React, { useRef, useState, useEffect } from "react";
import IndividualPlace from "./IndividualPlace";
import styled from "styled-components";

// Styled Components

const MapContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  pointer-events: none;
  filter: brightness(0.15);
`;
const BackgroundMap = styled.div`
  height: 100%;
  width: 100%;
`;

type Props = {};

const PlacesList = (props: Props) => {
  const backgroundMapRef = useRef<HTMLDivElement>(null);
  const [backgroundMap, setBackgroundMap] = useState<google.maps.Map>();
  const [placesInfo, setPlacesInfo] = useState<string[] | null>(null);

  useEffect(() => {
    if (backgroundMapRef.current && !backgroundMap) {
      const gmap = new window.google.maps.Map(backgroundMapRef.current, {
        zoom: 12,
        center: { lat: 45.5152, lng: -122.6784 },
        mapTypeControl: false,
        streetViewControl: false,
      });
      setBackgroundMap(gmap);
    }
  }, []);

  useEffect(() => {
    const storedPlaces = localStorage.getItem("savedPlaces");
    let newPlaceDetails: google.maps.places.PlaceResult[] = [];
    if (backgroundMap && storedPlaces) {
      JSON.parse(storedPlaces).forEach((pId: string) => {
        new window.google.maps.places.PlacesService(backgroundMap).getDetails(
          { placeId: pId },
          function (place, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
              if (place) {
                newPlaceDetails.push(place);
              } else {
                console.log("Could not find details for:", pId);
              }
            }
          }
        );
      });
    }
    if (typeof storedPlaces === "string") {
      setPlacesInfo(JSON.parse(storedPlaces));
    }
  }, [backgroundMap]);

  return (
    <>
      <MapContainer>
        <BackgroundMap ref={backgroundMapRef} />
      </MapContainer>
      {placesInfo?.map((p, i) => (
        <IndividualPlace key={i + p} id={p} gMap={backgroundMap} />
      ))}
    </>
  );
};

export default PlacesList;
