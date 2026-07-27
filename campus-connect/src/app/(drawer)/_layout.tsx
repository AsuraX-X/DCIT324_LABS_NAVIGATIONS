import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerShown: true }} initialRouteName="dashboard">
      <Drawer.Screen name="dashboard" options={{ title: "Dashboard" }} />
      <Drawer.Screen
        name="announcements"
        options={{ title: "Announcements" }}
      />
      <Drawer.Screen name="about" options={{ title: "About" }} />
      <Drawer.Screen name="help" options={{ title: "Help & Support" }} />
    </Drawer>
  );
}
