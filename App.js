import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useEffect, useState} from 'react';
import forge from 'node-forge';

export default function App() {

  const [signature, setSignature] = useState(null);

  useEffect(() => {
    // Função para gerar um par de chaves RSA
      let generateRSAKeys = async () => {
      try {
               
        const keyPair = forge.pki.rsa.generateKeyPair({ bits: 512 });

        // Converte as chaves para representação PEM (Privacy Enhanced Mail)
        const privateKeyPem = forge.pki.privateKeyToPem(keyPair.privateKey);
        const publicKeyPem = forge.pki.publicKeyToPem(keyPair.publicKey);
    
        //console.log('Chave Privada (PEM):', privateKeyPem);
        //console.log('Chave Pública (PEM):', publicKeyPem);

        // Assina uma mensagem usando a chave privada
        const messageToSign = 'Hello, World!';
        const md = forge.md.sha256.create();
        md.update(messageToSign, 'utf8');

        const generatedSignature  = keyPair.privateKey.sign(md);

        //console.log('Assinatura:', forge.util.encode64(signature));
        setSignature(forge.util.encode64(generatedSignature ));

      } catch (error) {
        console.error('Erro ao gerar chaves RSA:', error);
      }
    };

    // Chama a função para gerar chaves quando o componente montar
    generateRSAKeys();
  }, []);

  return (
    <View style={styles.container}>
     <Text>Assinatura: {signature}  </Text>
      <StatusBar style="auto" />
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
