import AsyncStorage from "@react-native-async-storage/async-storage";
import InitLocalRelay from "./initRelay";
import { getPublicKey, getEventHash, getSignature } from "nostr-tools";

interface Host {
  id: string;
  name: string;
  isSuperhost: boolean;
  pictureUrl: string;
}

interface Location {
  address: string;
  city: string;
  state: string;
  country: string;
  latitude: number;
  longitude: number;
}

interface AirbnbHouse extends Host, Location {
  id: string;
  title: string;
  description: string;
  type: string; // e.g. Entire place, Private room, Shared room
  maxGuests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  amenities: string[]; // an array of amenities, e.g. WiFi, Air conditioning, Kitchen
  pricePerNight: number;
  currency: string;
  rating: number;
  reviewsCount: number;
  images: string[]; // an array of image URLs
}

// const addHostStandard = async (airbnbHouse: Host) => {};

// const addLocationStandard = async (airbnbHouse: Location) => {};

// const addLocationStandard = async (airbnbHouse: AirbnbHouse) => {};

const PostToRelay = async () => {
  const relay = await InitLocalRelay();
  let sk = await AsyncStorage.getItem("privateKey");
  let pk = getPublicKey(sk);
  
  let event = {
    niggera: 1,
    pubkey: pk,
    created_at: Math.floor(Date.now() / 1000),
    tags: [],
    content: "hello world",
  };
  
  debugger
  // let pub = relay.publish(event);
  // pub.on("ok", () => {
  //   console.log(`${relay.url} has accepted our event`);
  // });
  // pub.on("failed", (reason) => {
  //   console.log(`failed to publish to ${relay.url}: ${reason}`);
  // });
};

export default PostToRelay;