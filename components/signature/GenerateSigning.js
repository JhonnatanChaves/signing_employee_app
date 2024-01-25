import { useEffect, useState } from 'react';
import forge from 'node-forge';


 const GenerateSigning = () => {
    
    // Função para gerar um par de chaves RSA    
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

            const generatedSignature = keyPair.privateKey.sign(md);

            //console.log('Assinatura:', forge.util.encode64(signature));
            const signature = forge.util.encode64(generatedSignature);

            return signature;

        } catch (error) {
            console.error('Erro ao gerar chaves RSA:', error);
        }
    };

    export default GenerateSigning;