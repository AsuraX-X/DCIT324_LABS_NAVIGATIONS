import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const events = [
  {
    id: "1",
    title: "Open day",
    date: "May 20",
    description: "Meet lecturers and explore campus facilities.",
  },
  {
    id: "2",
    title: "Hackathon",
    date: "May 22",
    description: "A 24-hour coding event for all students.",
  },
  {
    id: "3",
    title: "Career fair",
    date: "May 24",
    description: "Discover internships and job opportunities.",
  },
  {
    id: "4",
    title: "Music night",
    date: "May 27",
    description: "An evening of live performances on campus.",
  },
  {
    id: "5",
    title: "Campus clean-up",
    date: "May 29",
    description: "Join fellow students to keep the campus clean.",
  },
];

export default function FeedScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Feed</Text>
      {events.map((event) => (
        <Pressable
          key={event.id}
          style={styles.card}
          onPress={() =>
            router.push({
              pathname: "/(drawer)/dashboard/home/[id]",
              params: event,
            })
          }
        >
          <Text style={styles.cardTitle}>{event.title}</Text>
          <Text style={styles.cardDate}>{event.date}</Text>
        </Pressable>
      ))}
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
});
