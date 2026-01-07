import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { OrderContext } from "../context/OrderContext";

export default function OrderHistoryScreen() {
  const { orders } = useContext(OrderContext);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={styles.header}>Order History</Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Order ID: {item.id.slice(0, 8)}</Text>
            <Text>Date: {new Date(item.date).toLocaleString()}</Text>
            <Text>Total: ${item.total.toFixed(2)}</Text>
            <Text>Payment: {item.paymentMethod}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: { fontSize: 22, marginBottom: 20 },
  card: {
    backgroundColor: "#f6f6f6",
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
  },
});

