import { useCallback, useState } from "react";
import { useFocusEffect, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { getProfile, Profile } from "../store/profile";

export default function ProfileScreen() {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile>(getProfile());

  useFocusEffect(
    useCallback(() => {
      setProfile(getProfile());
    }, [])
  );

  const openEdit = () => {
    router.push({ pathname: "/edit-profile", params: profile });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.text}>Name: {profile.name}</Text>
      <Text style={styles.text}>Index Number: {profile.indexNumber}</Text>
      <Text style={styles.text}>Programme: {profile.programme}</Text>
      <Text style={styles.text}>Level: {profile.level}</Text>
      <Text style={styles.text}>Bio: {profile.bio}</Text>
      <Pressable style={styles.button} onPress={openEdit}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </Pressable>
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
    marginBottom: 18,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
