import React, { useRef, useState, useEffect } from "react";
import IndividualPlace from "./IndividualPlace";

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
  }, [backgroundMap]);

  useEffect(() => {
    const storedPlaces = localStorage.getItem("savedPlaces");
    if (typeof storedPlaces === "string") {
      setPlacesInfo(JSON.parse(storedPlaces));
    }
    console.log(storedPlaces);
  }, [backgroundMap]);

  return (
    <>
      <div className="h-screen w-screen fixed inset-0 -z-1 pointer-events-none brightness-15">
        <div className="h-full w-full" ref={backgroundMapRef} />
      </div>
      {placesInfo ? (
        placesInfo?.map((p, i) => (
          <IndividualPlace key={i + p} id={p} gMap={backgroundMap} />
        ))
      ) : (
        <p className="text-center">Add a place to view it here!</p>
      )}
    </>
  );
};

export default PlacesList;
