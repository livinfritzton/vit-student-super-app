import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../theme";

export function ScreenHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <View style={styles.header}>
      <View style={styles.logo}><Text style={styles.logoText}>VIT</Text></View>
      <View style={styles.heading}>
        <Text style={styles.title}>{title}</Text>
        {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: "row", alignItems: "center", paddingHorizontal: 20, paddingTop: 12, paddingBottom: 18, gap: 12 },
  logo: { width: 48, height: 48, borderRadius: 12, backgroundColor: colors.primary, alignItems: "center", justifyContent: "center" },
  logoText: { color: "#FFFFFF", fontWeight: "800", fontSize: 16, letterSpacing: 0.5 },
  heading: { flex: 1 },
  title: { color: colors.text, fontSize: 23, fontWeight: "800" },
  subtitle: { color: colors.muted, fontSize: 13, marginTop: 3 },
});