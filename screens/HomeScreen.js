// screens/HomeScreen.js
import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Text } from 'react-native-paper';

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: 'https://example.com/logo.png' }} style={styles.logo} />
      <Text style={styles.title}>Welcome to Our Shipping Company</Text>
      <Text style={styles.paragraph}>
        Our company has been a leader in the shipping industry for over 50 years. We provide reliable and efficient shipping services worldwide.
      </Text>
      <Text style={styles.paragraph}>
        We offer a wide range of shipping options to meet your needs, whether you're shipping a small package or a large cargo. Our team is dedicated to ensuring your items arrive safely and on time.
      </Text>
      <Text style={styles.paragraph}>
        With our state-of-the-art technology and experienced staff, we guarantee the best shipping experience. Join us and be part of our journey in revolutionizing the shipping industry.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    color: '#FFF',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: '#BB86FC',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default HomeScreen;
