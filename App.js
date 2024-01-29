import { StyleSheet, View } from 'react-native';
import React from 'react';
import StoreKeys from './components/keys_manipulation/StoreKeys';
import FindKeys from './components/keys_manipulation/FindKeys';
//import PDFPicker from './components/pdf_manipulation/PDFPicker'

export default function App() {

  return (
    <View style={styles.container}>
      <View>

        <StoreKeys />
        <FindKeys />

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
