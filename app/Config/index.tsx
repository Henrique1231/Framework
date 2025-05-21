import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { Link, router } from "expo-router";
import {Button, StyleSheet, Text, View } from "react-native";

export default function Config() {
  const logout = async () => {
    try {
      await AsyncStorage.removeItem('emailAutenticado')
    } catch (e) {

    }
   router.push("/(Home)");
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.titulo}>Página de Configuração</Text>
        <Link style={styles.titulo} href={"/(Home)/logado"}>Home</Link>
      </View>
      <View style={styles.responsivo2}>
        <Text style={styles.responsivo}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo excepturi ipsa eaque? Soluta minima quisquam rerum atque optio corporis expedita quasi voluptatem velit excepturi? Velit harum quisquam suscipit dolorem optio.</Text>
        <Button title="Deslogar" onPress={logout}></Button>
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
    height:"auto",
    width:"auto",
    justifyContent:'space-around',
    margin: 15
  },
  responsivo2: {
    height:"auto",
    width:"auto",
    justifyContent:'space-around',
    margin: 15,
    alignItems: 'center',
    padding: 10
  }
});