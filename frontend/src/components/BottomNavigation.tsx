import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../theme";

export type TabName = "Home" | "Academics" | "Services" | "Profile";
const tabs: { label: TabName; icon: React.ComponentProps<typeof Feather>["name"] }[] = [
  { label: "Home", icon: "home" },
  { label: "Academics", icon: "book-open" },
  { label: "Services", icon: "grid" },
  { label: "Profile", icon: "user" },
];

export function BottomNavigation({ activeTab, onChange }: { activeTab: TabName; onChange: (tab: TabName) => void }) {
  return (
    <View style={styles.bar}>
      {tabs.map((tab) => {
        const active = activeTab === tab.label;
        return (
          <Pressable key={tab.label} style={styles.item} onPress={() => onChange(tab.label)}>
            <Feather name={tab.icon} size={21} color={active ? colors.primary : colors.muted} />
            <Text style={[styles.label, active && styles.activeLabel]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: { flexDirection: "row", backgroundColor: colors.surface, borderTopWidth: 1, borderTopColor: colors.border, paddingTop: 10, paddingBottom: 8 },
  item: { flex: 1, alignItems: "center", gap: 4 },
  label: { fontSize: 11, color: colors.muted, fontWeight: "600" },
  activeLabel: { color: colors.primary },
});