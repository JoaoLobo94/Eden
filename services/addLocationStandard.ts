
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AirbnbHouse {
  id: string;
  title: string;
  description: string;
  type: string; // e.g. Entire place, Private room, Shared room
  maxGuests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  amenities: string[]; // an array of amenities, e.g. WiFi, Air conditioning, Kitchen
  host: {
    id: string;
    name: string;
    isSuperhost: boolean;
    pictureUrl: string;
  };
  location: {
    address: string;
    city: string;
    state: string;
    country: string;
    latitude: number;
    longitude: number;
  };
  pricePerNight: number;
  currency: string;
  rating: number;
  reviewsCount: number;
  images: string[]; // an array of image URLs
}

const addLocationStandard = async (airbnbHouse: AirbnbHouse) => {

}

