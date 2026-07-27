import { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { getProfile, saveProfile } from "../store/profile";

type Params = {
  name?: string;
  indexNumber?: string;
  programme?: string;
  level?: string;
  bio?: string;
};

export default function EditProfileScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<Params>();
  const profile = getProfile();
  const [name, setName] = useState(params.name ?? profile.name);
  const [bio, setBio] = useState(params.bio ?? profile.bio);
  const [programme, setProgramme] = useState(params.programme ?? profile.programme);

  useEffect(() => {
    setName(params.name ?? profile.name);
    setBio(params.bio ?? profile.bio);
    setProgramme(params.programme ?? profile.programme);
  }, [params.bio, params.name, params.programme, profile.bio, profile.name, profile.programme]);

  const handleSave = () => {
    saveProfile({ ...profile, name, bio, programme });
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Name" />
      <TextInput style={styles.input} value={bio} onChangeText={setBio} placeholder="Bio" />
      <TextInput style={styles.input} value={programme} onChangeText={setProgramme} placeholder="Programme" />
      <Pressable style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
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
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
