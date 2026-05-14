import React, { useState } from 'react';
import { router } from 'expo-router';
import {
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function LoginTelas() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    console.table({ email, senha });

    if (email.includes('@') && senha.length > 6) {
      console.log('✅ Acesso autorizado para:', email);
      router.push('/telas/dashboard');
    } else {
      console.log('❌ Falha no login: Verifique os critérios de validação.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/ONGconnect-logo.png')}
        />
      </View>

      <View style={styles.form}>
        <Text style={styles.title}>Seja bem-vindo ao ONG Connect!</Text>
        <Text style={styles.subtitle}>Conectando solidariedade e necessidade.</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />

        <Text style={styles.helperText}>
          Logando como: {email || '...'}
        </Text>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Conhecer Projetos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6ce9ffcd',
    paddingHorizontal: 24,
    paddingTop: 36,
    paddingBottom: 24,
    justifyContent: 'space-between',
  },
  top: {
    alignItems: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  bottom: {
    gap: 12,
  },
  logo: {
    width: 170,
    height: 170,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0b2233',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#cfe8ff',
    fontSize: 16,
  },
  helperText: {
    marginTop: 2,
    marginBottom: 8,
    color: '#0b2233',
    fontSize: 13,
  },
  button: {
    backgroundColor: '#005eff',
    paddingVertical: 13,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: '#ffffffaa',
    paddingVertical: 13,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8bbfff',
  },
  secondaryButtonText: {
    color: '#003b8f',
    fontSize: 15,
    fontWeight: '600',
  },
});