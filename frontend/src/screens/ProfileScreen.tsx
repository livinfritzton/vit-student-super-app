import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ScreenHeader } from "../components/ScreenHeader";
import { student } from "../data/studentData";
import { colors } from "../theme";

const details = [
  ["Registration Number", student.registrationNumber],
  ["Programme", student.programme],
  ["School", student.school],
  ["Campus", student.campus],
  ["Student Type", student.studentType],
];

export function ProfileScreen({ onLogout }: { onLogout: () => void }) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <ScreenHeader title="Student Profile" subtitle="Your student details" />
      <View style={styles.hero}>
        <View style={styles.avatar}><Feather name="user" size={34} color={colors.primary} /></View>
        <Text style={styles.name}>{student.name}</Text>
        <Text style={styles.campus}>{student.campus}</Text>
      </View>
      <View style={styles.card}>
        {details.map(([label, value], index) => (
          <View key={label} style={[styles.detailRow, index === details.length - 1 && styles.lastRow]}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.note}>These are sample profile details. The backend can later supply the signed-in student's actual data.</Text>
      <Pressable onPress={onLogout} style={({ pressed }) => [styles.logout, pressed && { opacity: 0.8 }]}>
        <Feather name="log-out" size={18} color="#FFFFFF" />
        <Text style={styles.logoutText}>Log Out</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { paddingBottom: 24 },
  hero: { alignItems: "center", paddingVertical: 18, marginHorizontal: 20, marginBottom: 18, backgroundColor: colors.surface, borderRadius: 18, borderWidth: 1, borderColor: colors.border },
  avatar: { width: 76, height: 76, borderRadius: 38, backgroundColor: colors.paleBlue, alignItems: "center", justifyContent: "center", marginBottom: 12 },
  name: { color: colors.text, fontSize: 20, fontWeight: "800" },
  campus: { color: colors.muted, fontSize: 13, marginTop: 5 },
  card: { marginHorizontal: 20, paddingHorizontal: 16, backgroundColor: colors.surface, borderRadius: 16, borderWidth: 1, borderColor: colors.border },
  detailRow: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: colors.border, gap: 6 },
  lastRow: { borderBottomWidth: 0 },
  label: { color: colors.muted, fontSize: 12 },
  value: { color: colors.text, fontSize: 14, fontWeight: "600" },
  note: { marginHorizontal: 20, marginTop: 14, color: colors.muted, fontSize: 11, lineHeight: 16 },
  logout: { marginHorizontal: 20, marginTop: 22, height: 50, borderRadius: 12, backgroundColor: colors.primary, flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8 },
  logoutText: { color: "#FFFFFF", fontSize: 16, fontWeight: "700" },
});