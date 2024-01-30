import * as DocumentPicker from 'expo-document-picker';


const PDFPicker = async () => {

    try {
      

      const docResponse = await DocumentPicker.getDocumentAsync({
        type: "application/pdf",
      });

      return docResponse.assets[0].uri;

    } catch (error) {
      console.log("Error while selecting file: ", error);
      return null;
    }
  };


export default PDFPicker;