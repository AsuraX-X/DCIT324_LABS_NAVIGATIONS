import { StyleSheet, Text, View } from "react-native";

const faqs = [
  {
    question: "How do I edit my profile?",
    answer: "Open the Profile tab and tap Edit Profile.",
  },
  {
    question: "How do I view announcements?",
    answer: "Use the drawer menu and open Announcements.",
  },
  {
    question: "How do I see my timetable?",
    answer: "Open the Timetable tab from the dashboard.",
  },
];

export default function HelpScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help & Support</Text>
      {faqs.map((item) => (
        <View key={item.question} style={styles.card}>
          <Text style={styles.question}>{item.question}</Text>
          <Text style={styles.answer}>{item.answer}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
  },
  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  question: {
    fontWeight: "600",
    marginBottom: 4,
  },
  answer: {
    color: "#555",
  },
});
