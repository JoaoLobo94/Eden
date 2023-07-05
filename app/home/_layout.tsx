import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>["name"]; color: string }) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{}}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,

          header: () => null,
        }}
      />
      <Tabs.Screen
        name="trips"
        options={{
          title: "My Trips",
          tabBarIcon: ({ color }) => <TabBarIcon name="map-pin" color={color} />,

          header: () => null,
        }}
      />
      <Tabs.Screen
        name="posts"
        options={{
          title: "Share Something",
          tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
          headerTitleAlign: "center", // Center header title
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,

          header: () => null,
        }}
      />
    </Tabs>
  );
}
