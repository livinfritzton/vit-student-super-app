import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { LoginScreen } from "./src/screens/LoginScreen";
import { DashboardScreen } from "./src/screens/DashboardScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen";
import { PlaceholderScreen } from "./src/screens/PlaceholderScreen";
import { BottomNavigation, TabName } from "./src/components/BottomNavigation";
import { colors } from "./src/theme";

export default function App() {
  const [user, setUser] = useState<string | null>(null); // null = logged out
  const [activeTab, setActiveTab] = useState<TabName>("Home");

  const handleLogout = () => {
    setUser(null);
    setActiveTab("Home");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <View style={styles.container}>
        {!user ? (
          <LoginScreen onLoginSuccess={setUser} />
        ) : (
          <>
            {activeTab === "Home" && <DashboardScreen onOpenProfile={() => setActiveTab("Profile")} />}
            {activeTab === "Profile" && <ProfileScreen onLogout={handleLogout} />}
            {!["Home", "Profile"].includes(activeTab) && <PlaceholderScreen title={activeTab} />}
            <BottomNavigation activeTab={activeTab} onChange={setActiveTab} />
          </>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  container: { flex: 1 },
});
