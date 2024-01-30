import * as SecureStore from 'expo-secure-store'


const FindKey = async (password) => {
        let result = await SecureStore.getItemAsync(password);

        if (result) {
            const pairKeys = JSON.parse(result);                        
            return pairKeys.privateKey;
        }
        else {
            alert('Senha incorreta, tente novamente');
            return null;
        }
    }


export default FindKey;