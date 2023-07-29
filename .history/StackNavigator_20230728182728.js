import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator()

function BottomTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScree}/>
        </Tab.Navigator>
    )
}