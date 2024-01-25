import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useEffect, useState} from 'react';
import StoreKeys from './components/rsa/StoreKeys';
import FindKeys from './components/rsa/FindKeys';

export default function App() {

  return (
    <View style={styles.container}>
        
        <FindKeys/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
