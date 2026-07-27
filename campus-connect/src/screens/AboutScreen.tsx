import { StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Campus Connect</Text>
      <Text style={styles.text}>
        A simple student app for campus navigation and updates.
      </Text>
      <Text style={styles.text}>Name: Michael Agyeman</Text>
      <Text style={styles.text}>Student ID: 10987654</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});
