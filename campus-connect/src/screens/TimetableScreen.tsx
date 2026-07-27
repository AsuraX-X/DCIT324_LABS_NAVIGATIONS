import { FlatList, StyleSheet, Text, View } from "react-native";

const timetable = [
  { day: "Monday", time: "8:00 AM", course: "CS101", venue: "Lab 1" },
  { day: "Monday", time: "10:00 AM", course: "MATH203", venue: "Room 2" },
  { day: "Tuesday", time: "9:00 AM", course: "CS201", venue: "Lab 3" },
  { day: "Wednesday", time: "11:00 AM", course: "ENG205", venue: "Room 4" },
  { day: "Thursday", time: "1:00 PM", course: "CS301", venue: "Lecture Hall" },
];

export default function TimetableScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Timetable</Text>
      <FlatList
        data={timetable}
        keyExtractor={(item, index) => `${item.day}-${index}`}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.day}>{item.day}</Text>
            <Text>{item.time}</Text>
            <Text>{item.course}</Text>
            <Text>{item.venue}</Text>
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
  day: {
    fontWeight: "700",
    marginBottom: 4,
  },
});
