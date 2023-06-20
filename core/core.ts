import { createAsyncThunk } from '@reduxjs/toolkit';
import { getEventHash, getSignature,  SimplePool, getPublicKey, Event } from 'nostr-tools';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {DEFAULT_RELAYS, DEV_RELAYS} from '../constants/relays';

export const postNote = createAsyncThunk('events/submitEvent', async (data :any) => {
  const pool = new SimplePool();
  const nsec = await AsyncStorage.getItem("privateKey");
  const npub = getPublicKey(nsec);

  let event = {
    id: '',
    sig: '',
    kind: 30017,
    pubkey: npub,
    created_at: Math.floor(Date.now() / 1000),
    tags: [],
    content: JSON.stringify(data)
  }

  event.id = getEventHash(event);
  event.sig = getSignature(event, nsec);

  try {
    console.log(event)
    const response = await pool.publish(DEV_RELAYS, event);
    return response;
  } catch (error) {
    throw new Error('Failed to submit event');
  }
});