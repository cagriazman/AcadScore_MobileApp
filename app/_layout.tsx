import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Slot } from 'expo-router';
import { KayitProvider } from './KayitContext';  
import SayfaButonlari from './SayfaButonlari';  

export default function Layout() {
  return (
    <KayitProvider>
      <View style={styles.container}>
        <SayfaButonlari />
        <View style={styles.content}>
          <Slot /> 
        </View>
      </View>
    </KayitProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 10,
    
  },
});
