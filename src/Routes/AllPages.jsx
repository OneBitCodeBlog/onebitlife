import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Start from "../Pages/Start";
import AppExplanation from "../Pages/AppExplanation";

const Stack = createNativeStackNavigator();

export default function AllPages() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="AppExplanation" component={AppExplanation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
