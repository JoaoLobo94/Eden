import React, { useState, useEffect } from "react";
import {
  Animated,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { styles } from "../components/styles";
import SetupNostrDefaults from "../services/setupNostrDefaults";
import { useRouter } from "expo-router";
import { Redirect } from 'expo-router';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = () => {
  const router = useRouter();
  const initialState = {
    offset: new Animated.ValueXY({ x: 0, y: 95 }),
    opacity: new Animated.Value(0),
    logo: new Animated.ValueXY({ x: 1, y: 1 }),
  };

  const [state] = useState(initialState);
  const [nsec, setNsec] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const keyboardDidShow = () => {
    Animated.parallel([
      Animated.timing(state.logo.x, {
        toValue: 0.7,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(state.logo.y, {
        toValue: 0.7,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const keyboardDidHide = () => {
    Animated.parallel([
      Animated.timing(state.logo.x, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(state.logo.y, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const login = async (sk?: string) => {
    try {
      setLoading(true);
      const connect = await SetupNostrDefaults(sk);
      if (connect) {
        router.push("home");
      }
    } catch (e) {
      alert("Error: " + e);
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", keyboardDidHide);
    Animated.parallel([
      Animated.spring(state.offset, {
        toValue: 0,
        speed: 8,
        bounciness: 15,
        useNativeDriver: true,
      }),
      Animated.timing(state.opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();

    AsyncStorage.getItem("privateKey").then((sk) => {
      if (sk) {
        setIsLoggedIn(true);
      }
    });

    return () => {
      Keyboard.removeListener("keyboardDidShow", keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", keyboardDidHide);
    };
  }, [state]);

  if (isLoggedIn === true) {
    return (<Redirect href="/home" />);
  } else {
    return (
      <KeyboardAvoidingView style={styles.background} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={styles.logocontainer}>
          <Animated.Image
            style={{
              transform: [{ scaleX: state.logo.x }, { scaleY: state.logo.y }],
            }}
            source={require("../assets/images/logo.png")}
          />
        </View>
        <Animated.View
          style={[
            styles.container,
            {
              opacity: state.opacity,
              transform: [
                {
                  translateY: state.offset.y,
                },
              ],
            },
          ]}
        >
          <Text style={styles.title}>AirNBits</Text>
          <TextInput
            placeholderTextColor="#3337"
            style={styles.input}
            placeholder="Paste your nsec to login"
            autoCorrect={false}
            value={nsec}
            onChangeText={(text) => setNsec(text)}
          />

          <TouchableOpacity style={styles.submitbutton} onPress={() => login(nsec)}>
            <Text style={styles.submittext}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Button title="Generate New account" onPress={() => login()} />
          </TouchableOpacity>

          {loading && (
            <View>
              <ActivityIndicator size="large" color="#35AAFF" />
            </View>
          )}
        </Animated.View>
      </KeyboardAvoidingView>
    );
  }
};

export default Login;
