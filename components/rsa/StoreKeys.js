import { ToastAndroid} from 'react-native';
import { useEffect} from "react";
import generateRSAKeys from "./GenerateKeys";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function StoreKeys() {

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

    const storeData = async () => {
        try {
            const keys = getKeys();
            await AsyncStorage.setItem("@signing-employee:keys", JSON.stringify(keys));
            ToastAndroid.show('Chaves armazenadas com sucesso!', ToastAndroid.SHORT);
        } catch (error) {
            console.log('Error: ', error);
        }
    };

    useEffect(() => {
        storeData()
    }, []);

}

