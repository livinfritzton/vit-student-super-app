import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, Platform, SafeAreaView } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  const [user, setUser] = useState(null); // null = logged out

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        {user ? (
          <HomeScreen user={user} onLogout={() => setUser(null)} />
        ) : (
          <LoginScreen onLoginSuccess={(name) => setUser(name)} />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  container: { flex: 1 },
});
