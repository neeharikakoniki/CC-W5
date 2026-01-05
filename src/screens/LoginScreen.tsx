import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useAuth } from "../context/AuthContext";

export default function LoginScreen() {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!name.trim() || !password.trim()) {
      return;
    }
    login(name);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Login</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          placeholder="Jane Appleseed"
          placeholderTextColor="#A69B94"
          value={name}
          onChangeText={setName}
          style={styles.input}
          autoCapitalize="words"
        />
        <Text style={[styles.label, styles.labelSpacing]}>Password</Text>
        <TextInput
          placeholder="••••••••"
          placeholderTextColor="#A69B94"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />
        <Pressable
          onPress={handleLogin}
          style={({ pressed }) => [
            styles.button,
            (!name.trim() || !password.trim()) && styles.buttonDisabled,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  label: {
    fontSize: 14,
    color: "#2D2A27",
    fontWeight: "500",
  },
  labelSpacing: {
    marginTop: 12,
  },
  input: {
    marginTop: 6,
    borderWidth: 1,
    borderColor: "#D8D3CF",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 9,
    fontSize: 16,
    color: "#2D2A27",
    backgroundColor: "#FFFFFF",
  },
  button: {
    marginTop: 18,
    backgroundColor: "#2D2A27",
    paddingVertical: 11,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonPressed: {
    transform: [{ scale: 0.98 }],
    opacity: 0.9,
  },
  buttonDisabled: {
    backgroundColor: "#8F8781",
  },
  buttonText: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "600",
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    color: "#2D2A27",
    fontWeight: "600",
  },
  form: {
    gap: 0,
  },
});
