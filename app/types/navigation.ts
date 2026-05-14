import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined; // Sem parâmetros
  Dashboard: { 
    userName: string; 
    voluntarioId: number; 
  }; // Parâmetros obrigatórios
};

export type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type DashboardProps = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;