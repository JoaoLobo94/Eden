import { createAsyncThunk } from "@reduxjs/toolkit";
import { getEventHash, getSignature, SimplePool, getPublicKey } from "nostr-tools";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NipData } from "../types/nostrNip";
import { DEFAULT_RELAYS, DEV_RELAYS } from "../constants/relays";
import { type Filter } from "nostr-tools/lib/filter";

export const postNote = createAsyncThunk(
  "events/submitEvent",
  async (data: NipData, tags: string[][], kind: number) => {
    const pool = new SimplePool();
    const nsec = await AsyncStorage.getItem("privateKey");
    const npub = getPublicKey(nsec);

    let event = {
      id: "",
      sig: "",
      kind: kind,
      pubkey: npub,
      created_at: Math.floor(Date.now() / 1000),
      tags: tags,
      content: JSON.stringify(data),
    };

    event.id = getEventHash(event);
    event.sig = getSignature(event, nsec);

    try {
      console.log(event);
      const response = await pool.publish(DEV_RELAYS, event);
      return response;
    } catch (error) {
      throw new Error("Failed to submit event");
    }
  }
);

export const getNote = createAsyncThunk("events/getEvent", async (authors: string[]) => {
  const pool = new SimplePool();

  try {
    let event = await pool.get(DEV_RELAYS, {
      authors: authors,
    });
    console.log(event);
    return event;
  } catch (error) {
    throw new Error("Failed to get event");
  }
});

export const getFilteredNotes = createAsyncThunk("events/getEvent", async (filter: Filter<any> = {}) => {
  const pool = new SimplePool();

  try {
    let events = await pool.list(DEV_RELAYS, [filter]);
    console.log(events);
    return events;
  } catch (error) {
    throw new Error("Failed to get event");
  }
});

export const getTaggedNotes = createAsyncThunk("events/getEvent", async () => {
  const pool = new SimplePool();

  try {
    let events = await pool.list(DEV_RELAYS, []);
    console.log(events);
    return events;
  } catch (error) {
    throw new Error("Failed to get event");
  }
});
