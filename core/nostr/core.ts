import { createAsyncThunk } from '@reduxjs/toolkit';
import { getEventHash, getSignature,  SimplePool, getPublicKey } from 'nostr-tools';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {DEFAULT_RELAYS} from '../../constants/relays';

export const postNote = createAsyncThunk('events/submitEvent', async (event) => {
  const pool = new SimplePool();
  const nsec = await AsyncStorage.getItem("privateKey");
  if (nsec !== null) {
    const npub = getPublicKey(nsec);
  }
  event.id = getEventHash(event);
  event.sig = getSignature(event, nsec);

  try {
    const response = await pool.publish(DEFAULT_RELAYS, event);
    return response;
  } catch (error) {
    throw new Error('Failed to submit event');
  }
});