import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginTelas from './telas/LoginTelas';
import Dashboard from './telas/dashboard';
import { RootStackParamList } from './types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{ headerShown: false }} // Desafio UX: Interface limpa
    >
      <Stack.Screen name="Login" component={LoginTelas} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
    </Stack.Navigator>
  );
}