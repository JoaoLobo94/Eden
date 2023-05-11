import { TextDecoder } from "text-encoding";
import { Connect } from "@nostr-connect/connect";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddRelayToNostr = async (relay: string = "ws://127.0.0.1:6969") => {
  new TextDecoder();

  const sk = AsyncStorage.getItem("privateKey");

  const connect = new Connect({ secretKey: sk, relay: relay });

  await connect.init();

  await AsyncStorage.setItem("privateKey", sk);
  return connect;
};

export default AddRelayToNostr;
