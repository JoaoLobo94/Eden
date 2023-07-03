import * as Crypto from "expo-crypto";
import AsyncStorage from "@react-native-async-storage/async-storage";
  // when nostr tools update is done
import { generatePrivateKey } from "nostr-tools";


// async function generatePrivateKey(): Promise<string> {
//   const privateKeyBytes = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, Math.random().toString());
//   return privateKeyBytes.substring(0, 64);
// }

const SetupNostrDefaults = async (sk?: string) => {
  sk = sk || (await generatePrivateKey());

  if (sk.length !== 64) {
    throw new Error("Invalid private key");
  }
  await AsyncStorage.setItem("privateKey", sk);

  return true
}


export default SetupNostrDefaults;
