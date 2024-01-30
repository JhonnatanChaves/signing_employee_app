import { TextInput, View, Button, Text, StyleSheet } from 'react-native';
//import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';
import PDFPicker from './PDFPicker.js';
import FindKey from '../keys/FindKey.js'
import { useEffect, useState } from 'react';


export default function PDFModify() {

  const [PDFUri, setPDFUri] = useState(null);
  const [password, setPassword] = useState(null);
  const [privateKey, setPrivateKey] = useState(null);


  const getPDFUri = async () => {
    const uri = await PDFPicker();
    setPDFUri(uri);
  }


  const getKey = async (password) => {
    const key = await FindKey(password);
    setPrivateKey(key);
  }


  const writePDF = async (password) => {

    getKey(password);

    console.log("URI : ", PDFUri);
    console.log("Chave : ", privateKey);
    {/*
    const page1 = PDFPage
      .modify(0)
      .drawText(keys, {
        x: 5,
        y: 235,
        color: '#F62727',
      })
      .drawRectangle({
        x: 150,
        y: 150,
        width: 50,
        height: 50,
        color: '#81C744',
      });

    const existingPDF = PDFPath.DocumentPickerAsset.uri;
    PDFDocument
      .modify(existingPDF)
      .modifyPages(page1, page2)
      .addPage(page3)
      .write() // Returns a promise that resolves with the PDF's path
      .then(path => {
        console.log('PDF modified at: ' + path);
      });
*/}


  }


  return (
    <View >
      <Button title="Buscar arquivo" onPress={getPDFUri} />

      <View>
        <Text>Digite sua senha:</Text>
        <TextInput style={styles.input} onChangeText={setPassword} value={password}></TextInput>

        <Button title="Assinar" onPress={() => writePDF(password)} />



      </View>




    </View>
  );

}


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});