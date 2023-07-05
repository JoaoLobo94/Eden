import React from "react";
import { View, TouchableOpacity, Button, TextInput } from "react-native";
import { useState  } from "react";
import { useDispatch } from "react-redux";
import { postNote, getFilteredNotes } from "../../core/core";
import { NipData } from "../../types/nostrNip";

const create = () => {
  const dispatch = useDispatch<any>();

  const product: NipData = {
    uuid: "123456",
    name: "Example Product",
    price: 9.99,
    needsMap: true,
    needsAutoFind: false,
    online: true,
    specifics: {
      attributes: {
        color: "red",
        size: "medium",
        weight: 0.5
      }
    }
  };


  const [formData, setFormData] = useState(product);

  const handleChange = (key, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    const tags = [["t", "airbnb"], ["d", formData.uuid]];
    const kind = 30017;
    // const filter = {
    //   "#t": ["airbnb"],
    // };

    dispatch(postNote({ data: formData, tags: tags, kind: kind }));
    // dispatch(getFilteredNotes(filter));
  };

  return (
    <View>
      {Object.keys(product).map((key) => (
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
