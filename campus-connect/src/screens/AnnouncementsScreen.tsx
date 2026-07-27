import { FlatList, StyleSheet, Text, View } from "react-native";

const announcements = [
  {
    id: 1,
    title: "Library opens late",
    date: "May 10",
    text: "The library will remain open until midnight for revision week.",
  },
  {
    id: 2,
    title: "Sports day",
    date: "May 12",
    text: "Join the interfaculty football tournament at the main field.",
  },
  {
    id: 3,
    title: "Wi-Fi upgrade",
    date: "May 14",
    text: "Campus Wi-Fi will be upgraded across all lecture halls.",
  },
  {
    id: 4,
    title: "Health clinic",
    date: "May 16",
    text: "Free health screening is available at the clinic this week.",
  },
  {
    id: 5,
    title: "Student forum",
    date: "May 18",
    text: "A student forum will discuss transport and accommodation issues.",
  },
];

export default function AnnouncementsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Announcements</Text>
      <FlatList
        data={announcements}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDate}>{item.date}</Text>
            <Text style={styles.cardText}>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  cardDate: {
    color: "#666",
    marginTop: 4,
  },
  cardText: {
    marginTop: 8,
  },
});
