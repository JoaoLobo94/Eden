interface Host {
  id: number;
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