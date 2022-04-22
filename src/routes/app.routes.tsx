import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';
import { useCallback } from 'react';
import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';
import { Resume } from '../screens/Resume';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  const tabBarIcon1 = useCallback(
    ({ size, color }: { size: number; color: string }) => (
      <MaterialIcons name="format-list-bulleted" size={size} color={color} />
    ),
    []
  );

  const tabBarIcon2 = useCallback(
    ({ size, color }: { size: number; color: string }) => (
      <MaterialIcons name="attach-money" size={size} color={color} />
    ),
    []
  );

  const tabBarIcon3 = useCallback(
    ({ size, color }: { size: number; color: string }) => (
      <MaterialIcons name="pie-chart" size={size} color={color} />
    ),
    []
  );

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.primary,
        tabBarStyle: {
          height: RFValue(70),
          paddingBottom: Platform.OS === 'android' ? RFValue(12) : getBottomSpace() - 6
        },
        tabBarLabelStyle: {
          fontSize: RFValue(11)
        }
      }}
    >
      <Screen
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: tabBarIcon1
        }}
      />
      <Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: tabBarIcon2
        }}
      />
      <Screen
        name="Resumo"
        component={Resume}
        options={{
          tabBarIcon: tabBarIcon3
        }}
      />
    </Navigator>
  );
}
