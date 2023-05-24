import * as Crypto from "expo-crypto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { relayInit } from "nostr-tools";


const relayList = [
  "wss://nostr.mom",
  "wss://ithurtswhenip.ee",
  "wss://nostr.lu.ke",
  "wss://relay.austrich.net",
  "wss://nostr-rs-relay.cryptoassetssubledger.com",
  "wss://nostr.zerofiat.world",
  "wss://relay.rebelbase.site",
  "wss://nostr.1f52b.xyz",
  "wss://global-relay.cesc.trade",
  "wss://bitcoinforthe.lol",
  "wss://nostr.nodeofsven.com",
  "wss://relay.stoner.com",
  "wss://relay.layer.systems",
  "wss://relay.valera.co",
  "wss://nerostr.xmr.rocks",
  "wss://relay.humanumest.social",
  "wss://nostr.roundrockbitcoiners.com",
  "wss://noster.online",
  "wss://relay.lacosanostr.com",
  "wss://nostr.mouton.dev",
  "wss://nostr-eu.coinfundit.com",
  "wss://nostramsterdam.vpx.moe",
  "wss://nostr.xmr.rocks",
  "wss://nostr.coollamer.com",
  "ws://127.0.0.1:6969"
];

async function generatePrivateKey(): Promise<string> {
  const privateKeyBytes = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, Math.random().toString());
  return privateKeyBytes.substring(0, 64);
}

const SetupNostrDefaults = async (sk?: string) => {

  sk = sk || (await generatePrivateKey());

  if (sk.length !== 64) {
    throw new Error("Invalid private key");
  }
  await AsyncStorage.setItem("privateKey", sk);

  relayList.forEach(async (endpoint) => {
    const relay = relayInit(endpoint);
    console.log(relay);
    relay.on("connect", () => {
      console.log(`connected to ${relay.url}`);
    });
    relay.on("error", () => {
      console.log(`failed to connect to ${relay.url}`);
    });
    await relay.connect();
  });
  return true
}


export default SetupNostrDefaults;
