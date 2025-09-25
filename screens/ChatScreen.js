import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from "react-native";

export default function ChatScreen({ route }) {
  const { user } = route.params;
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Chat con {user.name}</Text>
          {/* Aquí irán los mensajes y el input para escribir */}
          <Text style={styles.placeholder}>Próximamente: mensajes y chat en tiempo real</Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  placeholder: {
    color: "#bbb",
    fontSize: 18,
    textAlign: "center",
  },
});
