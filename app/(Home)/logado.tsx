import { Link } from "expo-router";
import {StyleSheet, Text, View } from "react-native";

export default function Logado() {
  return (
    <View>
      <View style={styles.container}>
        <Text>Perguntas e Respostas do FAQ</Text>
        <Link href={"/(Home)"}>Inicio</Link>
        <Link href={"/Config/user"}>Config</Link>
      </View>
      <View style={styles.responsivo}>
        <Link 
        href={{
          pathname: '/Itens/[id]',
          params: { id: 'aula' },
          }}>
          Pergunta do Aluno
        </Link>
        <Link
        href={{
          pathname: '/Itens/[id]',
          params: { id: 'online' },
          }}>
          Pergunta do Aluno
        </Link>
        <Link
        href={{
          pathname: '/Itens/[id]',
          params: { id: 'presencial' },
        }}>
        Pergunta do Aluno
        </Link>
      </View>
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
    flexDirection:'row',
    height:"auto",
    width:"auto",
    justifyContent:'space-around',
    alignItems:"center"
  },
});