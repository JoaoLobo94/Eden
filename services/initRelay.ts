import { relayInit } from "nostr-tools";
import { RelayList } from "../constants/relays";

const initNostrRelays = async () => {
  RelayList.forEach(async (endpoint) => {
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
};


export const InitLocalRelay = async () => {
  const relay = relayInit("ws://127.0.0.1:6969")
  relay.on("connect", () => {
    console.log(`connected to ${relay.url}`);
  });
  await relay.connect();
}
export default InitLocalRelay;

