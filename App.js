import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// ...existing code...
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import MainTabs from "./MainTabs";
import GroupChoiceScreen from "./screens/GroupChoiceScreen";
import ChatListScreen from "./screens/ChatListScreen";
import ChatScreen from "./screens/ChatScreen";
import CreateGroupScreen from "./screens/CreateGroupScreen";
import JoinGroupScreen from "./screens/JoinGroupScreen";
import RegisterScreen from "./screens/RegisterScreen";
// import JoinGroupScreen from "./screens/JoinGroupScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
  <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Pantalla inicial */}
        <Stack.Screen name="Login" component={LoginScreen} />
  {/* Pantalla de elección de grupo */}
  <Stack.Screen name="GroupChoice" component={GroupChoiceScreen} />
  {/* Pantalla de lista de chats */}
  <Stack.Screen name="ChatList" component={ChatListScreen} />
  {/* Pantalla de chat individual */}
  <Stack.Screen name="Chat" component={ChatScreen} />
  {/* Pantalla de crear grupo */}
  <Stack.Screen name="CreateGroup" component={CreateGroupScreen} />
  {/* Pantalla de unirse a grupo */}
  <Stack.Screen name="JoinGroup" component={JoinGroupScreen} />
  {/* Pantalla de registro */}
  <Stack.Screen name="Register" component={RegisterScreen} />
  {/* Pantalla principal con tabs */}
  <Stack.Screen name="Main" component={MainTabs} />
  {/* Pantalla de Perfil con header visible */}
  <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: true, title: "Perfil" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
