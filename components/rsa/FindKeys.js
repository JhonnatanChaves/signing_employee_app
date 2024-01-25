import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export default function FindKeys() {

    const [publicKey, setPublicKey] = useState(null);
    const [privateKey, setPrivateKey] = useState(null);

    const getData = async () => {
        try {

            const jsonObject = await AsyncStorage.getItem("@signing-employee:keys");            
            return  jsonObject != null ? JSON.parse(jsonObject) : null;            

        } catch (error) {
            console.log("Falha no acesso aos dados:", error)
        }
    };

    const buidData = async() => {
        const object = await getData();

        if (object != null) {
            setPublicKey(object.publicKey);
            setPrivateKey(object.privateKey);
        }
    }

    useEffect(() => {
        buidData();
    }, []);

    return (
        <View>
            <Text>Chave Pública: {publicKey}</Text>
            <Text>Chave Privada: {privateKey}</Text>
        </View>
    );

}