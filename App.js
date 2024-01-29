import { StyleSheet, View } from 'react-native';
import React from 'react';
import StoreKeys from './components/rsa/StoreKeys';
import FindKeys from './components/rsa/FindKeys';

export default function App() {

  return (
    <View style={styles.container}>
        <View>
        <StoreKeys/>
        </View>     
        <View>
        <FindKeys/>
        </View>        
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
