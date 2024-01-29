import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import * as SecureStore from 'expo-secure-store'


export default function FindKeys() {

    const [publicKey, setPublicKey] = useState(null);
    const [privateKey, setPrivateKey] = useState(null);
    const [password, setPassword] = useState('');

    async function getValueFor(password) {
        let result = await SecureStore.getItemAsync(password);

        if (result) {
            const pairKeys = JSON.parse(result);

            setPublicKey(pairKeys.publicKey);
            setPrivateKey(pairKeys.privateKey);

            console.log('Sua chave privada é: ', privateKey);
            console.log('Sua chave privada é: ', publicKey);
        }
        else {
            alert('Senha incorreta, tente novamente');
        }
    }

    return (
        <View>
            <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder='Digite uma senha para acessar suas chaves: '></TextInput>
            <Text> Este é o valor do input: {password}</Text>

            <Button title="Buscar chaves" onPress={() => getValueFor(password)} />
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