export const student = {
  name: "Student Name",
  registrationNumber: "24BCE0001",
  programme: "B.Tech Computer Science and Engineering",
  campus: "VIT Chennai",
  studentType: "Day Scholar",
  school: "School of Computer Science and Engineering",
};

export const announcements = [
  { title: "FAT timetable update", detail: "Check the official academic portal for the latest schedule.", tag: "Academics" },
  { title: "Club registrations", detail: "Look out for registration notices from student clubs.", tag: "Campus" },
  { title: "Library notice", detail: "Check the library portal for current availability and updates.", tag: "Notice" },
];

export const modules = [
  { title: "Academics", icon: "book-open" as const, description: "Courses, academic resources and class information." },
  { title: "Attendance", icon: "check-square" as const, description: "View attendance information and class records." },
  { title: "Timetable", icon: "clock" as const, description: "Your class timetable and schedule." },
  { title: "Examinations", icon: "file-text" as const, description: "Exam schedules, results and related updates." },
  { title: "Campus Services", icon: "map-pin" as const, description: "Useful campus services and official links." },
  { title: "Events", icon: "calendar" as const, description: "Campus events, clubs and activities." },
];