import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { styles } from "../../components/styles";
import PostToRelay from "../../services/relayPost";

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
