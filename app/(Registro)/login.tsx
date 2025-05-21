import { Link, router } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [WrongInput, setWrongInput] = useState(false);

  const handleLogin = async () => {
    const validEmail = 'alunosenacrs.com';
    const validPassword = '123456';

    if (email == validEmail && password == validPassword) {
      try {
        await AsyncStorage.setItem('emailAutentification', email);
      } catch (e) {

      }
      router.push("/(Home)/logado");
    } else {
      setWrongInput(true);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('emailAutenticado');
        if (value == null) {
          router.push("/(Home)/logado");
        }
      } catch (e) {

      }
    };
    getData();
  }, []);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.titulo}>Página de Login</Text>
        <Link style={styles.titulo} href={"/(Home)"}>Inicio</Link>
        <Link style={styles.titulo} href={"/(Home)/logado"}>Logado</Link>
        <Link style={styles.titulo} href={"/(Registro)/registrar"}>Registro</Link>
      </View>
      <View style={styles.responsivo}>
        <TextInput style={styles.input} placeholder="E-mail" onChangeText={setEmail} value={email} keyboardType="email-address" autoCapitalize="none"></TextInput>
        <TextInput style={styles.input} placeholder="Senha" onChangeText={setPassword} value={password} secureTextEntry onSubmitEditing={handleLogin}></TextInput>
        {WrongInput && (<Text style={styles.alertText}>E-mail ou Senha Incorretos</Text>)}
        <Button title="Login" onPress={handleLogin}></Button>
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
  alertText: {
    color:'red',
    marginHorizontal:'auto',
    marginBottom:12,
  },
});