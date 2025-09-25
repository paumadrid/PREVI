import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleLogin = async () => {
    if (!username || !password) {
      setError("Completa todos los campos");
      return;
    }
    const userData = await AsyncStorage.getItem(`user:${username}`);
    if (!userData) {
      setError("Usuario no encontrado");
      return;
    }
    const user = JSON.parse(userData);
    if (user.password !== password) {
      setError("Contraseña incorrecta");
      return;
    }
    setError("");
      await AsyncStorage.setItem('currentUser', username);
      navigation.navigate("GroupChoice");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="#000" />
          <Text style={styles.logo}>PREVI</Text>
          <TextInput
            placeholder="Usuario"
            placeholderTextColor="#999"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="#999"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
          {error ? (
            <Text style={{ color: 'red', marginBottom: 10 }}>{error}</Text>
          ) : null}
          <TouchableOpacity
            style={styles.button}
            onPress={handleLogin}
          >
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
          <Text style={styles.orText}>o</Text>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>Continuar con Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>Continuar con Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>Continuar con Facebook</Text>
          </TouchableOpacity>
          <Text style={styles.registerText}>
            ¿No tienes cuenta?{" "}
            <Text style={styles.registerLink} onPress={() => navigation.navigate("Register")}>Regístrate</Text>
          </Text>
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
    padding: 30,
  },
  logo: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 60,
    letterSpacing: 4,
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
  orText: {
    marginVertical: 20,
    fontSize: 14,
    color: "#bbb",
  },
  socialButton: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#fff",
    paddingVertical: 15,
    marginBottom: 15,
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#222",
  },
  socialText: {
    fontSize: 16,
    color: "#fff",
  },
  registerText: {
    marginTop: 40,
    fontSize: 14,
    color: "#bbb",
  },
  registerLink: {
    fontWeight: "bold",
    color: "#fff",
  },
});
