import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>

      <Image style={styles.logo} // Forma de colocar a imagem
        source={require("../assets/images/ONGconnect-logo.png")}
      />

      <Text style={styles.title}>Seja bem-vindo ao ONG Connect!</Text>
      <Text style={styles.subtitle}>Conectando solidariedade e necessidade.</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Conhecer Projetos</Text>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6ce9ffcd',
  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',

  },

  subtitle: {
    fontSize: 18,
    fontWeight: 500,
    color: '#000000',
    marginBottom: 28,
  },

  inputGroup: {
    marginBottom: 15,
    width: '100%',

  },

  button: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 25,
    backgroundColor: '#005eff',
    padding: 12,
    alignItems: 'center',
    width: '70%',
    marginTop: 10,
    minWidth: 150,

  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'

  },

});
