import { TextDecoder } from "text-encoding";
import { generatePrivateKey } from "nostr-tools";
import { Connect } from "@nostr-connect/connect";
import AsyncStorage from "@react-native-async-storage/async-storage";

const relayList = [
  "wss://nostr.mom",
  "wss://nostr.thomascdnns.com",
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

const SetupNostrDefaults = async (sk: string = generatePrivateKey()) => {
  console.log(123)
  new TextDecoder();

  const connections: Connect[] = [];

  for (const r of relayList) {
    const connect = new Connect({ secretKey: sk, relay: r });

    await connect.init();
    connections.push(connect);
  }

  await AsyncStorage.setItem("privateKey", sk);

  return connections;
};

export default SetupNostrDefaults;
