import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from "expo-router";


function Posts() {
  const router = useRouter();

  return (
    <View>
      <Text>Properties list</Text>
      <Button title="Add new property" onPress={() => router.push("/locations/create")} />
    </View>
  );
}

export default Posts;
