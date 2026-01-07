import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ProfileContext = createContext(null);
const STORAGE_KEY = "USER_PROFILE";

export function ProfileProvider({ children }) {
  const [profile, setprofile] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "CARD",
  });


  useEffect(()=>{
    loadProfile();
  },[]);

  function loadProfile = async()=> {
    const raw = await AsyncStorage.getItem(STORAGE_KEY);
    if(raw) setprofile(JSON.parse(raw));
  }
  

  function saveProfile= async(updated)=> {
    setprofile(updated);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    
  }
 
  return (
    <ProfileContext.Provider value={{ profile, saveProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

