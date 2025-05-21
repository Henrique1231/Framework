import { Link } from "expo-router";
import {Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function Login({navigation}: {navigation: any}) {
    const [text, onChangeText] = React.useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const submitValues = () => {
      console.log(text);
    }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.titulo}>Página de Registro</Text>
        <Link style={styles.titulo} href={"/(Home)"}>Inicio</Link>
        <Link style={styles.titulo} href={"/(Home)/logado"}>Logado</Link>
      </View>
      <View style={styles.responsivo}>
        <TextInput style={styles.input} placeholder="E-mail" onChangeText={setEmail} value={email} keyboardType="email-address" autoCapitalize="none"></TextInput>
        <TextInput style={styles.input} placeholder="Senha" onChangeText={setPassword} value={password} ></TextInput>
        <TextInput style={styles.input} placeholder="Validação de Senha" onChangeText={onChangeText} value={text}></TextInput>
        <Button title="Registrar-se" onPress={submitValues}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  container: {
    flexDirection:'row',
    height:"auto",
    width:"auto",
    backgroundColor:'yellow', 
    justifyContent:'space-around'
  },
  responsivo: {
    justifyContent:'space-around',
    alignItems:"center"
  },
  input: {
    height:40,
    borderColor: '#ccc',
    borderWidth:1,
    marginBottom:12,
    paddingHorizontal:8,
  },
});