import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// importar screens principales
import ScreenCrearCuenta from './src/screen/login/ScreenCrearCuenta';
import ScreenHome from "./src/screen/home/ScreenHome";
import ScreenLogin from "./src/screen/login/ScreenLogin";


function MyStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen name='login' component={ScreenLogin} />
            <Stack.Screen name='register' component={ScreenCrearCuenta} />
        </Stack.Navigator>
    );
}

function MyTab() {

    return(
        <Tab.Navigator>
            <Tab.Screen name='home' component={ScreenHome} options={{
                title: 'Dashboard',
                tabBarIcon: ({ size, color }) =>
                    <FontAwesome name="dashboard" size={size} color={color} />
            }} />

            <Tab.Screen name='setting' component={ScreenHome} options={{
                title: 'Setting',
                tabBarIcon: ({ size, color }) =>
                    <FontAwesome name="cog" size={size} color={color} />
            }} />
        </Tab.Navigator>
    );
}



export default function Navegacion() {
    return(
        <NavigationContainer>
            <MyTab/>
        </NavigationContainer>
    );
}