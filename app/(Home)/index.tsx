import { Link } from "expo-router";
import {StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Página Inicial do FAQ</Text>
      <Link href={"/(Home)/logado"}>Logado</Link>
      <Link href={"/(Registro)/login"}>Login</Link>
      <Link href={"/(Registro)/registrar"}>Registro</Link>
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