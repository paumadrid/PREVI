import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MyProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aquí podrás ver y editar tu propio perfil.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
