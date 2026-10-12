import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../theme";

type IconName = React.ComponentProps<typeof Feather>["name"];

export function FeatureCard({ title, icon, onPress }: { title: string; icon: IconName; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={styles.iconBox}><Feather name={icon} size={22} color={colors.primary} /></View>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, minHeight: 112, backgroundColor: colors.surface, borderRadius: 16, padding: 14, borderWidth: 1, borderColor: colors.border, justifyContent: "space-between" },
  pressed: { opacity: 0.75 },
  iconBox: { width: 42, height: 42, borderRadius: 12, backgroundColor: colors.paleBlue, alignItems: "center", justifyContent: "center" },
  title: { fontSize: 14, color: colors.text, fontWeight: "700", marginTop: 12 },
});