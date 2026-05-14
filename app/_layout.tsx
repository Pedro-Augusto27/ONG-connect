import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* O Expo Router entende que o index.tsx é a porta de entrada */}
      <Stack.Screen name="index" /> 
    </Stack>
  );
}
