import React, { useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { AddressContext } from "../context/AddressContext";

export default function AddressScreen({ navigation }) {
  const { address, updateAddress } = useContext(AddressContext);

  const allFilled = Object.values(address).every((v) => v.trim().length > 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Address</Text>

      {Object.keys(address).map((field) => (
        <TextInput
          key={field}
          placeholder={field}
          style={styles.input}
          value={address[field]}
          onChangeText={(t) => updateAddress(field, t)}
        />
      ))}

      <Button
        title="Continue to Payment"
        disabled={!allFilled}
        onPress={() => navigation.navigate("Payment")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  header: { fontSize: 20, marginBottom: 16 },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
  },
});
