import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import Shop from "./Shop";
import Cart from "./Cart";
import Header from "./Header";
import * as React from "react";

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="DIME"
        component={HomeScreen}
        options={{ headerTitle: () => <Header /> }}
      />
      {/* <HomeStack.Screen name="Cart" component={Cart} /> */}
      <HomeStack.Screen name="Shop" component={Shop} />
    </HomeStack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        {/* <Tab.Screen name="Shop" component={Shop} /> */}
        {/* <Tab.Screen name="Cart" component={Cart} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
