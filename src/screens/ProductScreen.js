import React, { useEffect, useState, useContext } from "react";
import { View, Text, FlatList, Image, Button, StyleSheet } from "react-native";
import { CartContext } from "../context/CartContext";

export default function ProductsScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json.products));
  }, []);

  return (
    <View style={{ flex: 1, padding: 12 }}>
      <Button title="View Cart" onPress={() => navigation.navigate("Cart")} />
      <Button title="Order History" onPress={() => navigation.navigate("OrderHistory")} />

      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.thumbnail }} style={styles.image} />
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>${item.price}</Text>
            </View>
            <Button title="Add" onPress={() => addToCart(item)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 12,
    backgroundColor: "white",
    marginBottom: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  image: { width: 60, height: 60, marginRight: 10 },
  title: { fontSize: 16, fontWeight: "600" },
});
