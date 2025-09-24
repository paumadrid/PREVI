import React, { useRef } from "react";
import {
  Animated,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const { height, width } = Dimensions.get("window");

// Datos de ejemplo
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

export default function HomeScreen({ navigation }) {
  const tabBarHeight = useBottomTabBarHeight(); // 👈 altura de la barra inferior
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <Animated.FlatList
      data={users}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index }) => {
        return (
          <View
            style={[styles.card, { height: height - tabBarHeight }]}
          >
            <Image source={item.image} style={styles.image} />
            <View style={styles.info}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Profile", { user: item })}
              >
                <Text style={styles.name}>
                  {item.name}, {item.age}
                </Text>
              </TouchableOpacity>
              <Text style={styles.bio}>{item.bio}</Text>
            </View>
          </View>
        );
      }}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      snapToAlignment="start"
  decelerationRate={0.95}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: true }
      )}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    width: width,
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    opacity: 1,
  },
  info: {
    position: "absolute",
    bottom: 15,
    left: 10,
    alignItems: "flex-start",
    width: "75%",
  },
  name: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 4,
    textShadowColor: "#222",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  bio: {
    color: "#ddd",
    fontSize: 18,
    marginTop: 2,
    textAlign: "left",
    textShadowColor: "#222",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
