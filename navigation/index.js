import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { TransactionsDetails, Transactions } from "../screens";

const { Navigator, Screen } = createStackNavigator();

export const RootStackNav = () => (
  <NavigationContainer>
    <Navigator>
      <Screen name="Transactions" component={Transactions} />
      <Screen
        name="TransactionsDetails"
        component={TransactionsDetails}
        options={({ route }) => ({ title: route?.params?.title })}
      />
    </Navigator>
  </NavigationContainer>
);
