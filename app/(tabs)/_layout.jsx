import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
const Tablayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FFBADE",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 65,
          },
        }}
      >
        <Tabs.Screen name="Home" />
        <Tabs.Screen name="Profile"/>
      </Tabs>
    </>
  );
};

export default Tablayout;
