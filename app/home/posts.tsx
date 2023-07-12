import React from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from "expo-router";


function Posts() {
  const router = useRouter();
  // button o add a uber aswell
  // just in cards what i currently own

  return (
    <View>
      <Text>Properties list</Text>
      <Button title="Add new property" onPress={() => router.push("create")} />
    </View>
  );
}

export default Posts;
