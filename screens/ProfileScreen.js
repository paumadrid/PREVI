import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from "react-native";

export default function ProfileScreen({ route }) {
  const { user } = route.params;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
      <Image source={user.image} style={styles.image} />
      <Text style={styles.name}>{user.name}, {user.age}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
    </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bio: {
    color: "#ddd",
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 20,
  },
});
