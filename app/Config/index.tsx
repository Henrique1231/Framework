import { Link } from "expo-router";
import {StyleSheet, Text, View } from "react-native";

export default function Config() {
  return (
    <View style={styles.container}>
      <Text>Página de Configuração</Text>
      <Link href={"/(Home)"}>Inicio</Link>
      <Link href={"/(Registro)/login"}>Login</Link>
      <Link href={"/Config/user"}>Config</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    height:"auto",
    width:"auto",
    backgroundColor:'yellow', 
    justifyContent:'space-around'
  },
  responsivo: {
    
  },
});