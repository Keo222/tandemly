import React from "react";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

// Styled Components
import { GreyBackground } from "../../styles/styledComponents/BackgroundDiv";

const PageWrapper = styled.div`
  display: flex;
  margin: 3vh 3vw;
`;

const MapDiv = styled.div`
  height: 94vh;
  width: 50vw;
  /* margin-block: 5vh;
  margin-inline: 2vw; */
  border-radius: 20px;
  position: fixed;
`;

const SectionControlsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100vh;
  margin-inline: 2vw;
  overflow-y: auto;
`;

const ControlGrouping = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ControlLabel = styled.label`
  font-size: 1.8rem;
  font-weight: 600;
  text-align: center;
`;

const StyledInput = styled.input`
  width: clamp(150px, 30vw, 800px);
`;

const NewPlaceDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`;

const NewLocTitle = styled.h3`
  font-size: 3rem;
  font-weight: 400;
  text-transform: uppercase;
  color: #ffd30f;
  margin-bottom: 1rem;
`;
const NewLocAddress = styled.p`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
`;
const NewLocPhone = styled.p`
  font-size: 1.4rem;
  margin-bottom: 1.8rem;
`;

const WebLink = styled.a`
  color: #8ad120;
  font-size: 1.4rem;
  text-decoration: none;
  margin-bottom: 1.2rem;

  &:hover {
    color: #e28ce2;
  }
`;

const PlaceImgContainer = styled.div`
  width: clamp(100px, 70%, 50vh);
  aspect-ratio: 1;
  margin-block: 2rem;
`;

const PlaceImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const ButtonsDiv = styled.div`
  display: flex;
  gap: 2rem;
  margin-block: 1.5rem;
`;

const StyledButton = styled.button`
  padding: 1rem 2rem;
  font-family: inherit;
  font-size: 1.4rem;
  font-weight: 500;
  color: #eee;
  border: none;
  border-radius: 5px;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    filter: brightness(0.8);
  }
`;

const ConfirmButton = styled(StyledButton)`
  background-color: green;
`;
const CancelButton = styled(StyledButton)`
  background-color: red;
`;

const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  // Search for a place
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchInputElem, setSearchInputElem] =
    useState<google.maps.places.Autocomplete>();
  const [newLoc, setNewLoc] =
    useState<google.maps.places.PlaceResult | null>(null);
  const [savedPlaces, setSavedPlaces] = useState<string[] | null>(null);
  useEffect(() => {
    let result = window.localStorage.getItem("savedPlaces");
    if (result !== null && result !== "undefined") {
      const newResult = JSON.parse(result);
      setSavedPlaces(newResult);
    } else {
      setSavedPlaces(null);
    }
  }, []);
  useEffect(() => {
    if (savedPlaces !== null) {
      window.localStorage.setItem(
        "savedPlaces",
        JSON.stringify(savedPlaces)
      );
    }
  }, [savedPlaces]);

  useEffect(() => {
    if (mapRef.current && !map) {
      setMap(
        new window.google.maps.Map(mapRef.current, {
          zoom: 12,
          center: { lat: 45.5152, lng: -122.6784 },
          mapTypeControl: false,
          streetViewControl: false,
        })
      );
    }
  }, [mapRef, map]);

  const [currCoords, setCurrCoords] = useState([0, 0]);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrCoords([
          position.coords.latitude,
          position.coords.longitude,
        ]);
        const marker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(
            position.coords.latitude,
            position.coords.longitude
          ),
          map,
          title: "Your Location",
        });
      });
    } else {
      /* geolocation IS NOT available */
    }
  }, [map]);

  useEffect(() => {
    if (inputRef.current && !searchInputElem) {
      setSearchInputElem(
        new window.google.maps.places.Autocomplete(inputRef.current, {
          fields: [
            "formatted_address",
            "geometry",
            "name",
            "photos",
            "icon",
            "place_id",
            "formatted_phone_number",
            "website",
          ],
          strictBounds: false,
          types: ["establishment"],
        })
      );
    }
  }, []);

  if (searchInputElem) {
    searchInputElem.addListener("place_changed", () => {
      const place = searchInputElem.getPlace();

      if (place && map) {
        if (place.geometry) {
          if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
          } else {
            if (place.geometry.location) {
              map.setCenter(place.geometry.location);
              map.setZoom(15);
            }
          }
          const marker = new google.maps.Marker({
            position: place.geometry.location,
            map,
            title: place.name,
          });
          setNewLoc(place);
        }
      }
    });
  }

  const router = useRouter();

  const addPlace = (placeItem: string | undefined) => {
    if (placeItem === undefined) {
      console.error("ID is undefined");
      return;
    } else if (savedPlaces === null || savedPlaces === undefined) {
      setSavedPlaces([placeItem]);
      router.push("/places");
    } else if (savedPlaces.includes(placeItem)) {
      alert("This place is already on your list!");
    } else {
      setSavedPlaces([...savedPlaces, placeItem]);
      router.push("/places");
    }
  };

  return (
    <PageWrapper>
      <GreyBackground />
      <MapDiv ref={mapRef} />
      <SectionControlsDiv>
        <ControlGrouping>
          <ControlLabel htmlFor="searchInput">Search:</ControlLabel>
          <StyledInput
            ref={inputRef}
            id="searchInput"
            name="searchInput"
            type="text"
          />
        </ControlGrouping>
        {newLoc ? (
          <>
            <NewPlaceDiv>
              <NewLocTitle>{newLoc.name}</NewLocTitle>
              <NewLocAddress>{newLoc.formatted_address}</NewLocAddress>
              {newLoc.formatted_phone_number !== undefined && (
                <NewLocPhone>{newLoc.formatted_phone_number}</NewLocPhone>
              )}
              {newLoc.website !== undefined && (
                <WebLink
                  href={newLoc.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {newLoc.website}
                </WebLink>
              )}
              <WebLink
                target="_blank"
                rel="noopener noreferrer"
                href={`https://www.google.com/maps/place/?q=place_id:${newLoc.place_id}`}
              >
                View in Google Maps
              </WebLink>
            </NewPlaceDiv>
            {newLoc.photos !== undefined && (
              <PlaceImgContainer>
                <PlaceImg
                  src={newLoc.photos[0].getUrl({
                    maxWidth: 1200,
                    maxHeight: 2000,
                  })}
                  alt="picture gotten from google places"
                />
              </PlaceImgContainer>
            )}
            <ButtonsDiv>
              <CancelButton
                onClick={(e) => {
                  e.preventDefault();
                  setNewLoc(null);
                }}
              >
                Cancel
              </CancelButton>
              <ConfirmButton onClick={() => addPlace(newLoc.place_id)}>
                Add to List
              </ConfirmButton>
            </ButtonsDiv>
          </>
        ) : (
          <p>Look up a new place!</p>
        )}
      </SectionControlsDiv>
    </PageWrapper>
  );
};

export default Map;
