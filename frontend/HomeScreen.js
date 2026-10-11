import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen({ user, onLogout }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>VIT</Text>
        <Text style={styles.subtitle}>VIT Student Super App</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.welcome}>Welcome! 🎉</Text>
        <Text style={styles.userText}>Logged in as</Text>
        <Text style={styles.userName}>{user}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={onLogout} activeOpacity={0.8}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', paddingHorizontal: 28 },
  header: { alignItems: 'center', marginBottom: 40 },
  title: { fontSize: 48, fontWeight: '800', color: '#1a3c8f', letterSpacing: 4 },
  subtitle: { fontSize: 18, fontWeight: '600', color: '#444', marginTop: 6 },
  card: {
    backgroundColor: '#f1f5ff',
    borderRadius: 14,
    padding: 28,
    alignItems: 'center',
    marginBottom: 32,
  },
  welcome: { fontSize: 24, fontWeight: '700', color: '#1a3c8f', marginBottom: 12 },
  userText: { fontSize: 14, color: '#666' },
  userName: { fontSize: 18, fontWeight: '600', color: '#111', marginTop: 4 },
  button: {
    height: 52,
    backgroundColor: '#1a3c8f',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: { color: '#fff', fontSize: 17, fontWeight: '700' },
});
