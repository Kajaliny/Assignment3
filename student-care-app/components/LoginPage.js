import React, { useState } from 'react';
import { TextInput, Button, Text, StyleSheet, View } from 'react-native';

const loginCredentials = {
  username: 'student123',
  password: 'password123'
};

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    if (username === loginCredentials.username && password === loginCredentials.password) {
      navigation.navigate('Profile');
    } else {
      setErrorMessage('Incorrect username or password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Login</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Username" 
        value={username}
        onChangeText={setUsername} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry
        value={password}
        onChangeText={setPassword} 
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    width: '80%',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginPage;
