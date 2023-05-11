import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Settings from "../../components/screens/settings";
import Login from "../screens/login";

const HomeScreen = () => {
  const [privateKeyExists, setPrivateKeyExists] = useState(false);

  useEffect(() => {
    async function checkPrivateKey() {
      const privateKey = await AsyncStorage.getItem("privateKey");
      setPrivateKeyExists(!!privateKey);
    }

    checkPrivateKey();
  }, []);

  return <>{privateKeyExists ? <Settings /> : <Login />}</>;
};

export default HomeScreen;

