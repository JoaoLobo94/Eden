import React from "react";
import { View, TouchableOpacity, Button, TextInput } from "react-native";
import { useState, useEffect } from "react";
import { defaultRelays } from "../../core/nostr";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getPublicKey, SimplePool, getEventHash, getSignature, EventTemplate } from "nostr-tools";

const create = () => {
  const [nsec, setNsec] = useState("");
  const [npub, setNpub] = useState("");
  const pool = new SimplePool();
  
  useEffect(() => {
    async function getInfo() {
      const nsec = await AsyncStorage.getItem("privateKey");
      if (nsec !== null) {
        const npub = getPublicKey(nsec);
        setNsec(nsec);
        setNpub(npub);
      }
    }
    getInfo();
  }, []);

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

  let event = {
    id: "",
    sig: "",
    kind: 1,
    pubkey: npub,
    created_at: Math.floor(Date.now() / 1000),
    tags: [['property']],
    content: 'hello world'
  };
  
  
  
  const handleSubmit = async () => {
    event.id = getEventHash(event);
    event.sig = getSignature(event, nsec);
    defaultRelays
    event
    npub
    let pubs = pool.publish(defaultRelays, event);
    pubs.on("ok", () => {
     console.log("ok");
    });
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
