import { Link } from "expo-router";
import {StyleSheet, Text, View, Image} from "react-native";

export default function Logado() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.titulo}>Perguntas e Respostas do FAQ</Text>
        <Link style={styles.titulo} href={"/(Home)/logado"}>Home</Link>
        <Link style={styles.titulo} href={"/Config"}>Config</Link>
      </View>
      <View style={styles.responsivo2}>
      <Image style={styles.imagem} source={{uri: 'https://www.superoffice.com/globalassets/blog/2016/10/how-to-build-faq-section.jpg'}}></Image>
      <Text style={styles.responsivo3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam reprehenderit nemo voluptatibus velit doloribus nulla culpa soluta corrupti quas, consequuntur fuga provident repudiandae numquam ad. Culpa tempora perspiciatis ipsam nesciunt.</Text>
      </View>
      <View style={styles.responsivo2}>
        <Link style={styles.botao} href={"/(Home)/pergunta"}>Perguntar ao Professor</Link>
        <Text style={styles.responsivo3}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ea numquam at doloremque nemo incidunt omnis odit, ducimus asperiores, sapiente impedit officiis velit. Expedita amet eaque quisquam rerum, aliquam illum.</Text>
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
    height: 200,
  },
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
    alignItems:"center",
    padding: 15
  },
  responsivo2: {
    height:"auto",
    width:"auto",
    justifyContent:'space-around',
    margin: 15,
    alignItems: 'center'
  },
  responsivo3: {
    height:"auto",
    width:"auto",
    justifyContent:'space-around',
    margin: 15,
    alignItems: 'center',
    padding: 10
  }
});