import React from 'react';
import { View, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';


const PDFPicker = () => {

  const pickSomething = async () => {
    try {
      const docRes = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
      });

      console.log(docRes);
    } catch (error) {
      console.log("Error while selecting file: ", error);
    }
  };

  return (
    <View >
      <Button title="Pick something" onPress={pickSomething} />
    </View>
  );

};

export default PDFPicker;