import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function JoinGroupScreen({ navigation }) {
  const [groupOrEmail, setGroupOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleJoinGroup = async () => {
    if (!groupOrEmail || !password) {
      setError("Completa todos los campos");
      return;
    }
    // Buscar grupo
    const groupData = await AsyncStorage.getItem(`group:${groupOrEmail}`);
    if (!groupData) {
      setError("Grupo no encontrado");
      return;
    }
    const groupObj = JSON.parse(groupData);
    if (groupObj.password !== password) {
      setError("Contraseña incorrecta");
      return;
    }
    // Asociar usuario actual al grupo
    const currentUser = await AsyncStorage.getItem('currentUser');
    if (currentUser) {
      const userObj = JSON.parse(await AsyncStorage.getItem(`user:${currentUser}`));
      userObj.group = groupOrEmail;
      await AsyncStorage.setItem(`user:${currentUser}`, JSON.stringify(userObj));
    }
    setError("");
    navigation.navigate("Main");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Unirse a grupo existente</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre del grupo o correo electrónico"
            placeholderTextColor="#888"
            value={groupOrEmail}
            onChangeText={setGroupOrEmail}
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
            onPress={handleJoinGroup}
          >
            <Text style={styles.buttonText}>Unirse</Text>
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
  button: {
    backgroundColor: "#fff",
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
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
