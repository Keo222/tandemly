import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { getDay } from "date-fns";

// Image Import
import catPic from "../../public/tempImgs/square_cat.jpeg";
import gMapsLogo from "../../public/logos/gmaps_logo.png";

// Styled Components
const PlaceDiv = styled.div`
  width: clamp(200px, 65%, 800px);
  height: 200px;
  box-sizing: content-box;
  margin-inline: auto;
  margin-block: 3rem;
  overflow: hidden;
  border: 2px solid #efefef;
  border-radius: 8px;
  display: flex;
  background-color: #2b303a;
`;

const ImgContainer = styled.div`
  height: 100%;
  aspect-ratio: 1;
`;

const InfoDiv = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const PlaceHeading = styled.h3`
  text-align: center;
  padding-top: 1rem;
  padding-inline: 1rem;
  margin: 0;
  flex-basis: 30%;
`;

const PlaceBody = styled.div`
  flex-basis: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-inline: 1.6rem;
`;

const IsOpen = styled.p`
  margin-block: auto;
  margin-right: auto;
`;

const OpenNow = styled(IsOpen)`
  color: var(--color-success-green);
`;
const ClosedNow = styled(IsOpen)`
  color: var(--color-failure-red);
`;
const UnknownNow = styled(IsOpen)`
  color: var(--color-warning-yellow);
`;

const SiteLink = styled.a`
  margin: auto;

  &:hover {
    color: var(--color-bright-blue);
  }
`;

const DirectionsLink = styled.a`
  margin-block: auto;
  margin-left: auto;
`;

type Props = { id: string; gMap: google.maps.Map | undefined };

const IndividualPlace = ({ id, gMap }: Props) => {
  const [placeDetails, setPlaceDetails] =
    useState<google.maps.places.PlaceResult | null>(null);
  const [imgUrl, setImgUrl] = useState<string | undefined>();
  const [openHoursText, setOpenHoursText] = useState<string>();
  const [placeOpen, setPlaceOpen] = useState<boolean>();

  useEffect(() => {
    if (gMap) {
      new window.google.maps.places.PlacesService(gMap).getDetails(
        { placeId: id },
        function (place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            if (place) {
              // console.log(place);
              setPlaceDetails(place);
              if (place.photos !== undefined) {
                const url = place.photos[0].getUrl({
                  maxWidth: 1000,
                  maxHeight: 1000,
                });
                setImgUrl(url);
              }
              if (place.opening_hours !== undefined) {
                if (place.opening_hours.weekday_text !== undefined) {
                  const today = new Date();
                  const day = getDay(today);
                  setOpenHoursText(place.opening_hours.weekday_text[0]);
                }
                const open = place.opening_hours.isOpen();
                setPlaceOpen(open);
              }
            } else {
              console.log("Could not find details for:", id);
            }
          }
        }
      );
    }
  }, [gMap, id]);

  return (
    <PlaceDiv>
      <ImgContainer>
        <Image
          src={imgUrl !== undefined ? imgUrl : catPic}
          layout="responsive"
          width={768}
          height={768}
          alt={`Google photo for ${placeDetails?.name}`}
        />
      </ImgContainer>
      <InfoDiv>
        <PlaceHeading>{placeDetails?.name}</PlaceHeading>
        <PlaceBody>
          {/* <PlaceHours>
            {openHoursText ? openHoursText : "Not Available"}
          </PlaceHours> */}
          {placeOpen === undefined ? (
            <UnknownNow>Not Available</UnknownNow>
          ) : placeOpen ? (
            <OpenNow>Open</OpenNow>
          ) : (
            <ClosedNow>Closed</ClosedNow>
          )}
          <SiteLink
            href={placeDetails?.website}
            rel="noopenner noreferrer"
            target="_blank"
          >
            Website
          </SiteLink>
          <DirectionsLink
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.google.com/maps/place/?q=place_id:${id}`}
          >
            <Image
              src={gMapsLogo}
              height={50}
              width={50}
              alt="Google Maps logo"
            />
          </DirectionsLink>
        </PlaceBody>
      </InfoDiv>
    </PlaceDiv>
  );
};

export default IndividualPlace;
