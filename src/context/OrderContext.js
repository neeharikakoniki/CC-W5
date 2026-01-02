import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

export const OrderContext = createContext();

const STORAGE_KEY = "ORDERS";

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  async function loadOrders() {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    setOrders(raw ? JSON.parse(raw) : []);
  }

  async function saveOrder(order) {
    const list = [order, ...orders];
    setOrders(list);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  function createOrder(cartItems, address, paymentMethod) {
    const total = cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0
    );

    return {
      id: uuid.v4(),
      date: new Date().toISOString(),
      items: cartItems,
      address,
      paymentMethod,
      total,
    };
  }

  return (
    <OrderContext.Provider value={{ orders, saveOrder, createOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

