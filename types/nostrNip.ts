export type HouseShare = {
  id: string;
  name: string;
  isSuperhost: boolean;
  pictureUrl: string;
  title: string;
  description: string;
  type: string;
  maxGuests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  amenities: string[];
  pricePerNight: number;
  currency: string;
  rating: number;
  reviewsCount: number;
  [key: string]: any;
};

export type NipData = {
  uuid: string;
  name: string;
  price: number;
  needsMap: boolean;
  needsAutoFind: boolean;
  online: boolean;
  specifics: {
    attributes: {
      [key: string]: any;
    };
  };
};
