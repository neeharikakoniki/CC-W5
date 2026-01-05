import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";

type AuthSnapshot = {
  isLoggedIn: boolean;
  userName: string;
};

type AuthContextType = {
  isLoggedIn: boolean;
  isLoading: boolean;
  userName: string;
  login: (name: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AUTH_STORAGE_KEY = "auth_state_v1";

export const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAuth = async () => {
      try {
        const stored = await AsyncStorage.getItem(AUTH_STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored) as AuthSnapshot;
          setIsLoggedIn(Boolean(parsed.isLoggedIn));
          setUserName(parsed.userName ?? "");
        }
      } catch {
        setIsLoggedIn(false);
        setUserName("");
      } finally {
        setIsLoading(false);
      }
    };

    loadAuth();
  }, []);

  const login = async (name: string) => {
    const nextName = name.trim();
    setIsLoggedIn(true);
    setUserName(nextName);
    await AsyncStorage.setItem(
      AUTH_STORAGE_KEY,
      JSON.stringify({ isLoggedIn: true, userName: nextName })
    );
  };

  const logout = async () => {
    setIsLoggedIn(false);
    setUserName("");
    await AsyncStorage.removeItem(AUTH_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        userName,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
