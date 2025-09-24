import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
} from "react-native";

const { height, width } = Dimensions.get("window");

// Datos de ejemplo (luego vendrán de Firebase)
const users = [
  {
    id: "1",
    name: "Darío",
    age: 22,
    bio: "Me gustan las perritas 🐶❤️",
    image: require("../assets/dario.jpg"),
  },
  {
    id: "2",
    name: "Nico",
    age: 27,
    bio: "Me gusta el fútbol y las bolas en general",
    image: require("../assets/nico.jpg"),
  },
  {
    id: "3",
    name: "Jota",
    age: 21,
    bio: "Fan de la música y las previas 🎶🍻",
    image: require("../assets/jota.jpg"),
  },
  {
    id: "4",
    name: "Ramon",
    age: 22,
    bio: "Catalanitas con tetitas",
    image: require("../assets/ramon.jpg"),
  },
  {
    id: "5",
    name: "Antonio",
    age: 22,
    bio: "Te vacuno cuando quieras",
    image: require("../assets/antonio.jpg"),
  },
];

export default function HomeScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>
          {item.name}, {item.age}
        </Text>
        <Text style={styles.bio}>{item.bio}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      snapToAlignment="start"
      decelerationRate="slow"
    />
  );
}

const styles = StyleSheet.create({
  card: {
    height: height,
    width: width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: "75%",
    resizeMode: "cover",
  },
  info: {
    position: "absolute",
    bottom: 50,
    left: 20,
    right: 20,
  },
  name: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  bio: {
    color: "#ddd",
    fontSize: 16,
    marginTop: 5,
  },
});
