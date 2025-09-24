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

export default function LoginScreen({ navigation }) {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

          {/* Logo */}
          <Text style={styles.logo}>PREVI</Text>

          {/* Inputs */}
          <TextInput
            placeholder="Correo electrónico"
            placeholderTextColor="#999"
            style={styles.input}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Contraseña"
            placeholderTextColor="#999"
            secureTextEntry
            style={styles.input}
          />

          {/* Botón de acceso manual */}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Main")}
          >
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>

          {/* Divider */}
          <Text style={styles.orText}>o</Text>

          {/* Botones sociales */}
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>Continuar con Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>Continuar con Apple</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialText}>Continuar con Facebook</Text>
          </TouchableOpacity>

          {/* Texto de registro */}
          <Text style={styles.registerText}>
            ¿No tienes cuenta?{" "}
            <Text style={styles.registerLink}>Regístrate</Text>
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
  },
  logo: {
    fontSize: 42,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 60,
    letterSpacing: 4,
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    fontSize: 16,
    marginBottom: 30,
    paddingVertical: 5,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 2,
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1,
  },
  orText: {
    marginVertical: 20,
    fontSize: 14,
    color: "#555",
  },
  socialButton: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#000",
    paddingVertical: 15,
    marginBottom: 15,
    alignItems: "center",
    borderRadius: 4,
  },
  socialText: {
    fontSize: 16,
    color: "#000",
  },
  registerText: {
    marginTop: 40,
    fontSize: 14,
    color: "#555",
  },
  registerLink: {
    fontWeight: "bold",
    color: "#000",
  },
});
