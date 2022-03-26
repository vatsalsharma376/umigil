import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useLogin } from "./context/LoginProvider";
import GMAPView from "./components/GMAPView";
import Chat from "./components/Chat";
import Trends from "./components/Trends";
import UserProfile from "./components/UserProfile";
const Stack = createNativeStackNavigator();
const DrawerNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="maps"
        component={GMAPView}
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="chat"
        component={Chat}
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="trend"
        component={Trends}
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="profile"
        component={UserProfile}
        options={{
          headerShown: false,
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default DrawerNavigator;
