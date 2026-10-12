import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ScreenHeader } from "../components/ScreenHeader";
import { colors } from "../theme";

export function PlaceholderScreen({ title }: { title: string }) {
  return (
    <View style={styles.screen}>
      <ScreenHeader title={title} subtitle="VIT Student Super App" />
      <View style={styles.empty}>
        <View style={styles.icon}><Feather name="tool" size={28} color={colors.primary} /></View>
        <Text style={styles.heading}>Coming soon</Text>
        <Text style={styles.description}>This section can be connected to the relevant backend API in the next development phase.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  empty: { flex: 1, alignItems: "center", justifyContent: "center", paddingHorizontal: 38, paddingBottom: 60 },
  icon: { width: 64, height: 64, borderRadius: 20, backgroundColor: colors.paleBlue, alignItems: "center", justifyContent: "center", marginBottom: 16 },
  heading: { color: colors.text, fontSize: 20, fontWeight: "800" },
  description: { color: colors.muted, fontSize: 13, lineHeight: 19, textAlign: "center", marginTop: 8 },
});