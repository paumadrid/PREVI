import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";

const chats = [
  {
    id: "1",
    name: "Darío",
    lastMessage: "¿Vamos a la previa hoy?",
    image: require("../assets/dario.jpg"),
  },
  {
    id: "2",
    name: "Nico",
    lastMessage: "Te paso el grupo nuevo",
    image: require("../assets/nico.jpg"),
  },
  {
    id: "3",
    name: "Jota",
    lastMessage: "Mañana fútbol a las 8",
    image: require("../assets/jota.jpg"),
  },
];

export default function ChatListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mensajes</Text>
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() => navigation.navigate("Chat", { user: item })}
          >
            <Image source={item.image} style={styles.avatar} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.lastMessage}>{item.lastMessage}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 30,
    paddingHorizontal: 10,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginRight: 14,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 2,
  },
  lastMessage: {
    color: "#bbb",
    fontSize: 16,
  },
});
