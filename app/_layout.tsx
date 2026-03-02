import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from '@/constants/colors';
import AppHeader from '@/components/app-header';
import { View } from 'react-native';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          header: ({ navigation, options, back }) => (
            <AppHeader navigation={navigation} options={options} back={back} />
          ),
          contentStyle: { backgroundColor: COLORS.background },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="memo/new" options={{ title: '新規作成' }} />
        <Stack.Screen name="memo/[id]" options={{ title: '編集' }} />
      </Stack>
      <StatusBar style="light" />
    </View>
  );
}
