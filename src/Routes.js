import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import BudgetDetailScreen from "./screens/BudgetDetailScreen";
import AddBudgetScreen from "./screens/AddBudgetScreen";

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen
        name="BudgetDetail"
        component={BudgetDetailScreen}
        options={{ title: "Details" }}
      />
      <Stack.Screen
        name="AddBudget"
        component={AddBudgetScreen}
        options={{ title: "Add Budget" }}
      />
    </Stack.Navigator>
  );
}
