// import { StyleSheet } from "react-native";
// import EditScreenInfo from "../../components/EditScreenInfo";
// import { Text, View } from "../../components/Themed";

// export default function TabOneScreen() {
//   return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Tab One</Text>
//         <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//         <EditScreenInfo path="app/(tabs)/index.tsx" />
//       </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: "80%",
//   },
// });

import React, { useState, useEffect } from "react";
import {
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const initialState = {
  offset: new Animated.ValueXY({ x: 0, y: 95 }),
  opacity: new Animated.Value(0),
  logo: new Animated.ValueXY({ x: 1, y: 1 }),
};

const LoginScreen = () => {
  const [state, setState] = useState(initialState);

  const keyboardDidShow = () => {
    Animated.parallel([
      Animated.timing(state.logo.x, {
        toValue: 0.7,
        duration: 100,
        useNativeDriver: true,
      }).start(),
      Animated.timing(state.logo.y, {
        toValue: 0.7,
        duration: 100,
        useNativeDriver: true,
      }).start(),
    ]);
  };

  const keyboardDidHide = () => {
    Animated.parallel([
      Animated.timing(state.logo.x, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start(),
      Animated.timing(state.logo.y, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start(),
    ]);
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
      }).start(),
      Animated.timing(state.opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start(),
    ]);

    // Cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", keyboardDidHide);
    };
  }, [state]);

  return (
    <KeyboardAvoidingView style={styles.background} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <View style={styles.logocontainer}>
        <Animated.Image
          style={{
            transform: [{ scaleX: state.logo.x }, { scaleY: state.logo.y }],
          }}
          source={require("../../assets/images/logo.png")}
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
          onChangeText={() => {}}
        />
        <TouchableOpacity style={styles.submitbutton}>
          <Text style={styles.submittext}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.registertext}>Generate new account</Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  logocontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },

  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50,
  },
  input: {
    width: "90%",
    marginBottom: 15,
    color: "black",
    fontSize: 17,
    borderRadius: 7,
    padding: 15,
    borderWidth: 1,
    borderColor: "#3337",
  },
  submitbutton: {
    backgroundColor: "#35AAFF",
    width: "90%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    borderRadius: 7,
  },
  submittext: {
    color: "#FFF",
    fontSize: 18,
  },
  registertext: {
    color: "black",
  },
  title: {
    fontSize: 55,
    fontWeight: "bold",
    color: "#6e5494",
    marginBottom: 30,
  },
});
