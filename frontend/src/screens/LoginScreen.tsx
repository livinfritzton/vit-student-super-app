import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../theme";

// Sample credentials (replace with a real API call later)
const VALID_USERNAME = "student@vit";
const VALID_PASSWORD = "123abc";

export function LoginScreen({ onLoginSuccess }: { onLoginSuccess: (username: string) => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!username.trim() || !password) {
      setError("Please enter both username and password.");
      return;
    }
    if (username.trim().toLowerCase() === VALID_USERNAME && password === VALID_PASSWORD) {
      setError("");
      onLoginSuccess(username.trim());
    } else {
      setError("Incorrect username or password. Please try again.");
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <View style={styles.header}>
        <Text style={styles.title}>VIT</Text>
        <Text style={styles.subtitle}>VIT Student Super App</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={[styles.input, !!error && styles.inputError]}
          placeholder="Username"
          placeholderTextColor="#999"
          value={username}
          onChangeText={(t) => {
            setUsername(t);
            setError("");
          }}
          autoCapitalize="none"
          autoCorrect={false}
        />

        <View style={styles.passwordRow}>
          <TextInput
            style={[styles.input, styles.passwordInput, !!error && styles.inputError]}
            placeholder="Password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={(t) => {
              setPassword(t);
              setError("");
            }}
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.toggle}>
            <Text style={styles.toggleText}>{showPassword ? "Hide" : "Show"}</Text>
          </Pressable>
        </View>

        {!!error && <Text style={styles.errorText}>{error}</Text>}

        <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", paddingHorizontal: 28, backgroundColor: colors.background },
  header: { alignItems: "center", marginBottom: 48 },
  title: { fontSize: 48, fontWeight: "800", color: colors.primary, letterSpacing: 4 },
  subtitle: { fontSize: 18, fontWeight: "600", color: colors.text, marginTop: 6 },
  form: { width: "100%" },
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    color: colors.text,
    backgroundColor: colors.surface,
    marginBottom: 16,
  },
  inputError: { borderColor: "#D92D20" },
  passwordRow: { justifyContent: "center" },
  passwordInput: { paddingRight: 64 },
  toggle: { position: "absolute", right: 16, top: 0, height: 52, justifyContent: "center" },
  toggleText: { color: colors.primary, fontWeight: "600" },
  errorText: { color: "#D92D20", fontSize: 14, marginBottom: 12, textAlign: "center" },
  button: { height: 52, backgroundColor: colors.primary, borderRadius: 10, alignItems: "center", justifyContent: "center", marginTop: 4 },
  pressed: { opacity: 0.8 },
  buttonText: { color: "#FFFFFF", fontSize: 17, fontWeight: "700" },
});
