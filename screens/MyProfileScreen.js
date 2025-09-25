import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MyProfileScreen() {
  const navigation = useNavigation();
  const [group, setGroup] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [groupCount, setGroupCount] = React.useState(null);

  React.useEffect(() => {
    const fetchUserAndCount = async () => {
      const currentUser = await AsyncStorage.getItem('currentUser');
      setUsername(currentUser || "");
      let userGroup = "";
      if (currentUser) {
        const userObj = JSON.parse(await AsyncStorage.getItem(`user:${currentUser}`));
        userGroup = userObj.group || "";
        setGroup(userGroup);
      }
      // Contar integrantes del grupo
      if (userGroup) {
        const allKeys = await AsyncStorage.getAllKeys();
        const userKeys = allKeys.filter(k => k.startsWith('user:'));
        const userDatas = await AsyncStorage.multiGet(userKeys);
        const count = userDatas.filter(([key, val]) => {
          try {
            return val && JSON.parse(val).group === userGroup;
          } catch {
            return false;
          }
        }).length;
        setGroupCount(count);
      } else {
        setGroupCount(null);
      }
    };
    fetchUserAndCount();
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.text}>Aquí podrás ver y editar tu propio perfil.</Text>
          <Text style={styles.text}>Usuario: {username}</Text>
          <Text style={styles.text}>Grupo: {group ? group : "No perteneces a ningún grupo"}</Text>
          {group ? (
            <Text style={styles.text}>Integrantes en el grupo: {groupCount !== null ? groupCount : "-"}</Text>
          ) : null}
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CreateGroup')}
          >
            <Text style={styles.buttonText}>Crear nuevo grupo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#2196F3', marginTop: 8 }]}
            onPress={() => navigation.navigate('JoinGroup')}
          >
            <Text style={styles.buttonText}>Unirse a grupo</Text>
          </TouchableOpacity>
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
  text: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 22,
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
