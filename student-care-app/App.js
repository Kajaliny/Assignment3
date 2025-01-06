import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import CoursePage from './components/CoursePage';
import SubjectPage from './components/SubjectPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Course" component={CoursePage} />
        <Stack.Screen name="Subject" component={SubjectPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
