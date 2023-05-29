import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { styles } from "../../components/styles";

function Properties() {
  
  return (
    <View>
      <Text>Properties</Text>
      <Button title="Add new property" />
      <TouchableOpacity>
            <Button title="Post property" onPress={() => PostToRelay()} />
          </TouchableOpacity>
    </View>
  );
}

export default Properties;
