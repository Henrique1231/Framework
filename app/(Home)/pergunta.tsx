import { Link } from "expo-router";
import React from "react";
import {StyleSheet, Text, View, Image, TextInput} from "react-native";

export default function Index() {
    const [text, onChangeText] = React.useState('Pergunte ao Professor');
    
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.titulo}>Página Inicial do FAQ</Text>
        <Link style={styles.titulo} href={"/(Home)/logado"}>Home</Link>
        <Link style={styles.titulo} href={"/Config"}>Config</Link>
      </View>
      <View style={styles.responsivo}>
        <Image style={styles.imagem} source={{uri: 'https://www.superoffice.com/globalassets/blog/2016/10/how-to-build-faq-section.jpg'}}></Image>
        <Text style={styles.responsivo2}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ipsum qui doloremque quibusdam impedit exercitationem rem similique corporis odit nesciunt consequuntur, eaque tempore cum optio aut et praesentium reiciendis repellat!</Text>
      </View>
      <View>
        <TextInput style={styles.responsivo2} onChangeText={onChangeText} value={text}/>
        <Link style={styles.responsivo3} href={"/(Home)/logado"}>Enviar Pergunta</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  botao: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'cyan'
  },
  imagem: {
    width: 400,
    height: 200
  },
  container: {
    flexDirection:'row',
    height:"auto",
    width:"auto",
    backgroundColor:'yellow', 
    justifyContent:'space-around'
  },
  responsivo: {
    height:"auto",
    width:"auto",
    justifyContent:'space-around',
    margin: 15,
    alignItems: 'center'
  },
  responsivo2: {
    height:"auto",
    width:"auto",
    justifyContent:'space-around',
    margin: 15,
    alignItems: 'center',
    padding: 10
  },
  responsivo3: {
    height:"auto",
    width: 210,
    justifyContent:'space-around',
    margin: 15,
    alignItems: 'center',
    padding: 10,
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'cyan'
  }
});