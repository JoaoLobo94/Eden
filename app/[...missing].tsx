import { Stack } from "expo-router";

import { View } from "../components/Themed";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View ></View>
    </>
  );
}
