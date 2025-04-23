import { Link } from "expo-router";
import {Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

export default function Login({navigation}: {navigation: any}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [WrongInput, setWrongInput] = useState(false);

  const handleLogin = () => {
    const validEmail = 'Profsenacrs.com';
    const validPassword = '123456';

    if (email == validEmail && password == validPassword) {
      navigation.navigate('Home', { email });
    } else {
      setWrongInput(true);
    }
  };

  return (
    <View>
      <View style={styles.container}>
        <Text>Página de Login</Text>
        <Link href={"/(Home)"}>Inicio</Link>
        <Link href={"/(Home)/logado"}>Logado</Link>
        <Link href={"/(Registro)/registrar"}>Registro</Link>
        <Link href={"/Config/user"}>Config</Link>
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