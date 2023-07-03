import React from "react";
import { View, TouchableOpacity, Button, TextInput } from "react-native";
import { useState  } from "react";
import { useDispatch } from "react-redux";
import { postNote } from "../../core/core";
import { HouseShare } from "../../types/nostrNip";

const create = () => {
  const dispatch = useDispatch<any>();

  const houseShareExample: HouseShare = {
    id: "abc123",
    name: "Cozy House Share",
    isSuperhost: false,
    pictureUrl: "https://example.com/image.jpg",
    title: "Cozy House Share with Garden",
    description: "A comfortable house share with a beautiful garden.",
    type: "Shared House",
    maxGuests: 4,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    amenities: ["Wi-Fi", "Kitchen", "Laundry"],
    pricePerNight: 50,
    currency: "USD",
    rating: 4.5,
    reviewsCount: 10,
  };


  const [formData, setFormData] = useState(houseShareExample);

  const handleChange = (key, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    // dispatch(postNote(formData));
    // dispatch(getNote());
  };

  return (
    <View>
      {Object.keys(houseShareExample).map((key) => (
        <TextInput
          key={key}
          value={formData[key]}
          onChangeText={(value) => handleChange(key, value)}
          placeholder={key}
        />
      ))}
      <TouchableOpacity>
        <Button title="Post property" onPress={handleSubmit} />
      </TouchableOpacity>
    </View>
  );
};

export default create;
