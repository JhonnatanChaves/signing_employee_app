import { StyleSheet, View } from 'react-native';
import React from 'react';
import PDFModify from './components/pdf/PDFModify';

export default function App() {

  return (
    <View style={styles.container}>
      <View>

        <PDFModify />

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
