import React from "react";
import { Button, Text, View } from "react-native";
import { styles } from "../../components/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Settings = () => {
  async function deletePk() {
    await AsyncStorage.removeItem("privateKey");
    window.location.reload();
  }
  return (
    <View>
      <Button
        title="Logout"
        onPress={() => {
          deletePk();
        }}
      />
      <Text style={styles.title}>Settings component</Text>
    </View>
  );
};

export default Settings;
