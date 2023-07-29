import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";

const Tab = createBottomTabNavigator()

function BottomTabs() {
    return (
      <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarLabel: "Home",
        }}/>
      </Tab.Navigator>
    );
}