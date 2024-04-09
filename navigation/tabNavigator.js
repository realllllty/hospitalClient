import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/homePage';
import ChatScreen from '../pages/Chat';
import Setting from '../pages/Setting';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                headerShown: false,
            }}/>
            <Tab.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    headerShown: false,
                }}/>
            <Tab.Screen
                name="Settings"
                component={Setting}
                options={{
                    headerShown: false,
                }}/>
        </Tab.Navigator>
    );
}

export default TabNavigator;
