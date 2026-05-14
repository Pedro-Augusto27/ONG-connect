import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DashboardProps } from '../types/navigation';

export default function Dashboard({ route, navigation }: DashboardProps) {
  // Recuperando os parâmetros
  const { userName } = route.params;

  const handleLogout = () => {
    // Pensamento Crítico: Reset para impedir de voltar com o botão "back"
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../../assets/images/ONGconnect-logo.png')} />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Dashboard</Text>
        {/* Exibição personalizada */}
        <Text style={styles.subtitle}>
          Olá, {userName}, que bom ter você aqui para ajudar!
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3fbff',
    paddingHorizontal: 24,
    paddingTop: 36,
    paddingBottom: 24,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#003b8f',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0b2233',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#0b2233',
    textAlign: 'center',
    lineHeight: 20,
  },
  footer: {
    gap: 12,
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
});

