import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            statusBarStyle: "auto",
            statusBarColor: "#D2cfc6",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
