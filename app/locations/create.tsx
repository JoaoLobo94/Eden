import React from "react";
import { View, TouchableOpacity, Button, TextInput } from "react-native";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postNote } from "../../core/core";

const create = () => {
  const dispatch = useDispatch<any>();


  const initialFormData = {
    id: "",
    name: "",
    isSuperhost: false,
    pictureUrl: "",
    address: "",
    city: "",
    state: "",
    country: "",
    latitude: 0,
    longitude: 0,
    title: "",
    description: "",
    type: "",
    maxGuests: 0,
    bedrooms: 0,
    beds: 0,
    bathrooms: 0,
    amenities: [],
    pricePerNight: 0,
    currency: "",
    rating: 0,
    reviewsCount: 0,
    images: [],
    startDateAvailable: "",
    endDateAvailable: "",
    occupancyPeriods: {
      npub: "",
      startDate: "",
      endDate: "",
      // make it repeatable somehow?
    },
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (key, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    dispatch(postNote(formData));
  };

  return (
    <View>
      {Object.keys(initialFormData).map((key) => (
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
