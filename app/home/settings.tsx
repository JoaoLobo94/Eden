import React from "react";
import { Button, Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../../components/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getPublicKey } from "nostr-tools";
import { useState, useEffect } from "react";

const Settings = () => {

  async function deletePk() {
    await AsyncStorage.removeItem("privateKey");
    window.location.reload();
  }

  const handleConnectRelay = () => {
    // add relays
  };

  const [nsec, setNsec] = useState(null);
  const [npub, setNpub] = useState("");
  const [lnUrl, setLnUrl] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [btcAddress, setBtcAddress] = useState("");
  const [selectedRelay, setSelectedRelay] = useState("");

  useEffect(() => {
    async function getKeys() {
      const nsec = await AsyncStorage.getItem("privateKey");
      const lnUrl = await AsyncStorage.getItem("lnUrl");
      const whatsapp = await AsyncStorage.getItem("whatsapp");
      const btcAddress = await AsyncStorage.getItem("btcAddress");
      setLnUrl(lnUrl);
      setWhatsapp(whatsapp);
      setBtcAddress(btcAddress);
      setNsec(nsec);
      if (nsec) {
        const npub = getPublicKey(nsec);
        setNpub(npub);
      }
    }
    getKeys();
  }, []);

  const saveLnUrl = async () => {
    await AsyncStorage.setItem("lnUrl", lnUrl);
  };

  const saveWhatsapp = async () => {
    await AsyncStorage.setItem("whatsapp", whatsapp);
  };

  const saveBtcAddress = async () => {
    await AsyncStorage.setItem("btcAddress", btcAddress);
  };

  return (
    <View>
      <Text>your nsec</Text>
      <Text>{nsec}</Text>
      <Text>your npub</Text>
      <Text>{npub}</Text>
      <TextInput
        placeholderTextColor="#3337"
        style={styles.input}
        placeholder="Paste your lnurl"
        autoCorrect={false}
        value={lnUrl}
        onChangeText={(text) => setLnUrl(text)}
      />
      <TouchableOpacity style={styles.submitbutton} onPress={() => saveLnUrl()}>
        <Text style={styles.submittext}>save ln wallet for transfers</Text>
      </TouchableOpacity>
      <TextInput
        placeholderTextColor="#3337"
        style={styles.input}
        placeholder="Paste your phone number"
        autoCorrect={false}
        value={whatsapp}
        onChangeText={(text) => setWhatsapp(text)}
      />
      <TouchableOpacity style={styles.submitbutton} onPress={() => saveWhatsapp()}>
        <Text style={styles.submittext}>save whatsapp for contacts</Text>
      </TouchableOpacity>
      <TextInput
        placeholderTextColor="#3337"
        style={styles.input}
        placeholder="Paste your btc address"
        autoCorrect={false}
        value={btcAddress}
        onChangeText={(text) => setBtcAddress(text)}
      />
      <TouchableOpacity style={styles.submitbutton} onPress={() => saveBtcAddress()}>
        <Text style={styles.submittext}>save bitcoin wallet for transfers</Text>
      </TouchableOpacity>
      <TextInput
        placeholderTextColor="#3337"
        style={styles.input}
        placeholder="Connect to a new relay"
        autoCorrect={false}
        value={selectedRelay}
        onChangeText={(text) => setSelectedRelay(text)}
      />
      <TouchableOpacity style={styles.submitbutton} onPress={() => handleConnectRelay()}>
        <Text style={styles.submittext}>Connect to a new relay</Text>
      </TouchableOpacity>
      <Button title="Logout" onPress={deletePk} />
      <Text>All this data is locally stored, if you log out you will have to enter it again</Text>
    </View>
  );
};

export default Settings;
