import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CreateGroupScreen({ navigation }) {
  const [groupName, setGroupName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleCreateGroup = async () => {
    if (!groupName || !password) {
      setError("Completa todos los campos");
      return;
    }
    // Guardar grupo en AsyncStorage
    await AsyncStorage.setItem(`group:${groupName}`, JSON.stringify({ name: groupName, password }));
    // Asociar usuario actual al grupo
    const currentUser = await AsyncStorage.getItem('currentUser');
    if (currentUser) {
      const userObj = JSON.parse(await AsyncStorage.getItem(`user:${currentUser}`));
      userObj.group = groupName;
      await AsyncStorage.setItem(`user:${currentUser}`, JSON.stringify(userObj));
    }
    navigation.navigate("Main");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Crear nuevo grupo</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre del grupo"
            placeholderTextColor="#888"
            value={groupName}
            onChangeText={setGroupName}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          {error ? <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text> : null}
          <TouchableOpacity
            style={styles.button}
            onPress={handleCreateGroup}
          >
            <Text style={styles.buttonText}>Crear grupo</Text>
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
  input: {
    backgroundColor: "#222",
    color: "#fff",
    fontSize: 18,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 18,
    marginBottom: 18,
    width: "100%",
  },
  // ...existing code...
  button: {
    backgroundColor: "#222",
    paddingVertical: 16,
    paddingHorizontal: 30,
    borderRadius: 16,
    marginTop: 10,
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
