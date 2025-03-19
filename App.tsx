import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// スクリーンのインポート
import HomeScreen from './src/screens/HomeScreen';
import AddTeaScreen from './src/screens/AddTeaScreen';
import TeaDetailScreen from './src/screens/TeaDetailScreen';
import StatisticsScreen from './src/screens/StatisticsScreen';

// ナビゲーションの型定義
export type RootStackParamList = {
  Home: undefined;
  AddTea: undefined;
  TeaDetail: { teaId: string };
  Statistics: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f5f5f5',
            },
            headerTintColor: '#333',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'お茶一覧' }}
          />
          <Stack.Screen
            name="AddTea"
            component={AddTeaScreen}
            options={{ title: 'お茶を追加' }}
          />
          <Stack.Screen
            name="TeaDetail"
            component={TeaDetailScreen}
            options={{ title: 'お茶の詳細' }}
          />
          <Stack.Screen
            name="Statistics"
            component={StatisticsScreen}
            options={{ title: '統計' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
} 