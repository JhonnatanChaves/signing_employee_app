import { Text, TextInput, Button, View, StyleSheet } from 'react-native';
import { useState } from "react";
import generateRSAKeys from "../rsa/GenerateKeys";
import * as SecureStore from 'expo-secure-store'

export default function StoreKeys() {
    const [password, setPassword] = useState('');

    const getKeys = () => {
        try {
            const objectKeys = generateRSAKeys();

            if (objectKeys.keyPair != null)
                return objectKeys.keyPair;

            else
                console.log('As chaves não foram geradas: ', objectKeys.error);

        } catch (error) {
            ToastAndroid.show('Ops! Houve um problema.', ToastAndroid.SHORT);
        }
    }

    const saveKeys = async (password) => {

        const keys = getKeys();
        const jsonKeys = JSON.stringify(keys);

        await SecureStore.setItemAsync(password, jsonKeys);

        alert("Sucesso ao salvar!");
    }

    return (

        <View>
            <Text>Digite uma senha para proteger suas chaves: </Text>
            <TextInput style={styles.input} onChangeText={setPassword} value={password}></TextInput>

            <Button title="Salvar senha" onPress={() => saveKeys(password)} />
        </View>

    )
}


const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});