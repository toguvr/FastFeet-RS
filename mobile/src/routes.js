import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation, useIsFocused } from '@react-navigation/native';

import SignIn from './pages/SignIn';

import Orders from './pages/New/Orders';
import ReportProblem from './pages/New/ReportProblem';
import OrderInfo from './pages/New/OrderInfo';
import EndOrder from './pages/New/EndOrder';

import ViewProblem from './pages/New/ViewProblem';
import Profile from './pages/Profile';

Icon.loadFont();

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function NewStack() {
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  useEffect(() => {
    if (isFocused) navigation.navigate('Orders');
  }, [navigation, isFocused]);

  return (
    <Stack.Navigator
      headerStyle={{
        borderBottomWidth: 0,
      }}
      headerMode="screen"
      screenOptions={{
        headerTintColor: '#FFF',
        headerLeftContainerStyle: {
          marginLeft: 16.5,
        },
      }}
    >
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: false,
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Entregas');
              }}
            >
              <Icon name="chevron-left" size={20} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="OrderInfo"
        component={OrderInfo}
        options={{
          headerStyle: {
            backgroundColor: '#7D40E7',
          },
          headerTransparent: false,

          title: 'Detalhes da encomenda',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Orders');
              }}
            >
              <Icon name="chevron-left" size={24} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="ReportProblem"
        component={ReportProblem}
        options={{
          headerStyle: {
            backgroundColor: '#7D40E7',
          },
          headerTransparent: false,

          title: 'Informar Problema',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('OrderInfo');
              }}
            >
              <Icon name="chevron-left" size={24} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="EndOrder"
        component={EndOrder}
        options={{
          headerStyle: {
            backgroundColor: '#7D40E7',
          },
          headerTransparent: false,

          title: 'Confirmar Entrega',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('OrderInfo');
              }}
            >
              <Icon name="chevron-left" size={24} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="ViewProblem"
        component={ViewProblem}
        options={{
          headerStyle: {
            backgroundColor: '#7D40E7',
          },
          headerTransparent: false,

          title: 'Visualizar Problemas',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('OrderInfo');
              }}
            >
              <Icon name="chevron-left" size={24} color="#FFF" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  ) : (
    <Tabs.Navigator
      tabBarOptions={{
        // tabStyle: { borderWidth: 1, borderColor: '#999999' },

        activeTintColor: '#7D40E7',
        inactiveTintColor: '#999999',
        style: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#ccc',
        },
        keyboardHidesTabBar: true,
      }}
    >
      <Tabs.Screen
        name="Entregas"
        component={NewStack}
        options={{
          tabBarLabel: 'Entregas',
          tabBarIcon: ({ color }) => (
            <Icon name="reorder" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Meu Perfil',

          tabBarIcon: ({ color }) => (
            <Icon name="account-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
