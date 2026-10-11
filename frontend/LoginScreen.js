import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

// Sample credentials (replace with a real API later)
const VALID_USERNAME = 'student@vit';
const VALID_PASSWORD = '123abc';

export default function LoginScreen({ onLoginSuccess }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username.trim() || !password) {
      setError('Please enter both username and password.');
      return;
    }
    if (username.trim().toLowerCase() === VALID_USERNAME && password === VALID_PASSWORD) {
      setError('');
      onLoginSuccess(username.trim());
    } else {
      setError('Incorrect username or password. Please try again.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.header}>
        <Text style={styles.title}>VIT</Text>
        <Text style={styles.subtitle}>VIT Student Super App</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={[styles.input, error ? styles.inputError : null]}
          placeholder="Username"
          placeholderTextColor="#999"
          value={username}
          onChangeText={(t) => {
            setUsername(t);
            setError('');
          }}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <View style={styles.passwordRow}>
          <TextInput
            style={[styles.input, styles.passwordInput, error ? styles.inputError : null]}
            placeholder="Password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={(t) => {
              setPassword(t);
              setError('');
            }}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.toggle}>
            <Text style={styles.toggleText}>{showPassword ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleLogin} activeOpacity={0.8}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', paddingHorizontal: 28 },
  header: { alignItems: 'center', marginBottom: 48 },
  title: { fontSize: 48, fontWeight: '800', color: '#1a3c8f', letterSpacing: 4 },
  subtitle: { fontSize: 18, fontWeight: '600', color: '#444', marginTop: 6 },
  form: { width: '100%' },
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#d0d5dd',
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#111',
    backgroundColor: '#f8f9fb',
    marginBottom: 16,
  },
  inputError: { borderColor: '#d92d20' },
  passwordRow: { justifyContent: 'center' },
  passwordInput: { paddingRight: 64 },
  toggle: { position: 'absolute', right: 16, top: 0, height: 52, justifyContent: 'center' },
  toggleText: { color: '#1a3c8f', fontWeight: '600' },
  errorText: { color: '#d92d20', fontSize: 14, marginBottom: 12, textAlign: 'center' },
  button: {
    height: 52,
    backgroundColor: '#1a3c8f',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  buttonText: { color: '#fff', fontSize: 17, fontWeight: '700' },
});
