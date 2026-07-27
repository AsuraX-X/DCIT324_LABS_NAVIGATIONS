import { FlatList, StyleSheet, Text, View } from "react-native";

const courses = [
  { code: "CS101", title: "Introduction to Programming", credits: 3 },
  { code: "CS201", title: "Data Structures", credits: 3 },
  { code: "CS301", title: "Algorithms", credits: 4 },
  { code: "MATH203", title: "Calculus II", credits: 3 },
  { code: "ENG205", title: "Technical Writing", credits: 2 },
];

export default function CoursesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Courses</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.code}>{item.code}</Text>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.credits}>{item.credits} credits</Text>
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
  code: {
    fontWeight: "700",
  },
  titleText: {
    marginTop: 4,
  },
  credits: {
    color: "#666",
    marginTop: 4,
  },
});
