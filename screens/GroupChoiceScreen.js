import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from "react-native";

export default function GroupChoiceScreen({ navigation }) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>¿Qué quieres hacer?</Text>
          <TouchableOpacity
            style={styles.button}
  onPress={() => navigation.navigate("JoinGroup")}
          >
            <Text style={styles.buttonText}>Añadirme a grupo existente</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("CreateGroup")}
          >
            <Text style={styles.buttonText}>Crear nuevo grupo</Text>
          </TouchableOpacity>
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
    paddingHorizontal: 30,
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#222",
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 16,
    marginVertical: 12,
    width: "100%",
    alignItems: "center",
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
