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
];

async function generatePrivateKey(): Promise<string> {
  const privateKeyBytes = await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, Math.random().toString());
  return privateKeyBytes.substring(0, 64);
}

const SetupNostrDefaults = async (sk?: string) => {
  sk = sk || await generatePrivateKey();
  await AsyncStorage.setItem("privateKey", sk);

  // const connections: Connect[] = [];

  // if (true) {
  //   const connect = new Connect({ secretKey: sk, relay: 'ws://127.0.0.1:6969' });
  //   await connect.init();
  //   connections.push(connect);
  // } else {
  //   for (const r of relayList) {
  //     const connect = new Connect({ secretKey: sk, relay: r });
  //     await connect.init();
  //     connections.push(connect);
  //   }
  // }

  // return connections;
    const relay = relayInit("ws://127.0.0.1:6969");
    console.log(relay);
    relay.on("connect", () => {
      console.log(`connected to ${relay.url}`);
    });
    relay.on("error", () => {
      console.log(`failed to connect to ${relay.url}`);
    });
    await relay.connect();

};

export default SetupNostrDefaults;
