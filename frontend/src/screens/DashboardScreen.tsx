import React from "react";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { ScreenHeader } from "../components/ScreenHeader";
import { FeatureCard } from "../components/FeatureCard";
import { announcements, modules, student } from "../data/studentData";
import { colors } from "../theme";

export function DashboardScreen({ onOpenProfile }: { onOpenProfile: () => void }) {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <ScreenHeader title="Hello Student" subtitle="VIT Chennai • Student Super App" />
      <Pressable onPress={onOpenProfile} style={styles.profileStrip}>
        <View style={styles.avatar}><Feather name="user" size={22} color={colors.primary} /></View>
        <View style={styles.studentInfo}>
          <Text style={styles.studentName}>{student.name}</Text>
          <Text style={styles.regNo}>{student.registrationNumber}</Text>
        </View>
        <Feather name="chevron-right" size={20} color={colors.muted} />
      </Pressable>

      <View style={styles.welcomeCard}>
        <View style={styles.welcomeText}>
          <Text style={styles.welcomeTitle}>Your campus, in one place.</Text>
          <Text style={styles.welcomeSubtitle}>Quick access to student information and campus resources.</Text>
        </View>
        <Feather name="layers" size={30} color="#FFFFFF" />
      </View>

      <View style={styles.sectionHeading}>
        <Text style={styles.sectionTitle}>Student Features</Text>
        <Text style={styles.sectionHint}>Quick access</Text>
      </View>
      <View style={styles.grid}>
        {modules.map((module) => (
          <FeatureCard key={module.title} title={module.title} icon={module.icon} onPress={() => {}} />
        ))}
      </View>

      <View style={styles.sectionHeading}>
        <Text style={styles.sectionTitle}>Announcements</Text>
        <Feather name="bell" size={18} color={colors.muted} />
      </View>
      {announcements.map((item) => (
        <View key={item.title} style={styles.announcement}>
          <View style={styles.announcementMark} />
          <View style={styles.announcementBody}>
            <View style={styles.announcementTop}>
              <Text style={styles.announcementTitle}>{item.title}</Text>
              <Text style={styles.tag}>{item.tag}</Text>
            </View>
            <Text style={styles.announcementDetail}>{item.detail}</Text>
          </View>
        </View>
      ))}
      <Text style={styles.note}>Prototype data is for demonstration. Connect official APIs before using real student information.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { paddingBottom: 22 },
  profileStrip: { marginHorizontal: 20, marginBottom: 16, backgroundColor: colors.surface, borderRadius: 14, borderWidth: 1, borderColor: colors.border, padding: 12, flexDirection: "row", alignItems: "center", gap: 12 },
  avatar: { width: 42, height: 42, borderRadius: 21, backgroundColor: colors.paleBlue, alignItems: "center", justifyContent: "center" },
  studentInfo: { flex: 1 },
  studentName: { color: colors.text, fontSize: 15, fontWeight: "700" },
  regNo: { color: colors.muted, fontSize: 12, marginTop: 3 },
  welcomeCard: { marginHorizontal: 20, marginBottom: 22, borderRadius: 18, padding: 20, backgroundColor: colors.primary, flexDirection: "row", alignItems: "center", gap: 12 },
  welcomeText: { flex: 1 },
  welcomeTitle: { color: "#FFFFFF", fontSize: 18, fontWeight: "800", marginBottom: 7 },
  welcomeSubtitle: { color: "#E4EDFF", fontSize: 12, lineHeight: 18 },
  sectionHeading: { marginHorizontal: 20, marginBottom: 12, marginTop: 2, flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  sectionTitle: { color: colors.text, fontSize: 17, fontWeight: "800" },
  sectionHint: { color: colors.muted, fontSize: 12 },
  grid: { marginHorizontal: 20, flexDirection: "row", flexWrap: "wrap", gap: 12, marginBottom: 24 },
  announcement: { marginHorizontal: 20, marginBottom: 10, padding: 14, borderRadius: 14, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface, flexDirection: "row", gap: 11 },
  announcementMark: { width: 4, borderRadius: 3, backgroundColor: colors.primary },
  announcementBody: { flex: 1 },
  announcementTop: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 8 },
  announcementTitle: { flex: 1, color: colors.text, fontSize: 13, fontWeight: "700" },
  tag: { color: colors.primary, backgroundColor: colors.paleBlue, paddingHorizontal: 7, paddingVertical: 4, borderRadius: 6, fontSize: 10, overflow: "hidden" },
  announcementDetail: { color: colors.muted, fontSize: 12, lineHeight: 17, marginTop: 6 },
  note: { marginHorizontal: 20, marginTop: 8, color: colors.muted, fontSize: 10, lineHeight: 15 },
});