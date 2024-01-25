import forge from 'node-forge';

const generateRSAKeys = () => {

  try {

    const keyPair = forge.pki.rsa.generateKeyPair({ bits: 512 });

    const objectKeys = {
      privateKey: forge.pki.privateKeyToPem(keyPair.privateKey),
      publicKey: forge.pki.publicKeyToPem(keyPair.publicKey),
    }

    return { keyPair: objectKeys, error: "OK" }

  } catch (error) {

    return { keyPair: null, error: error };
  }
};

export default generateRSAKeys;