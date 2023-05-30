import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { styles } from "../../components/styles";
import { connectToRelay } from '../../core/nostr';


function Properties() {

  return (
    <View>
      <Text>Properties</Text>
      <Button title="Add new property" />
      <TouchableOpacity>
            <Button title="Post property" onPress={() => connectToRelay('ws://127.0.0.1:6969')} />
          </TouchableOpacity>
    </View>
  );
}

export default Properties;
