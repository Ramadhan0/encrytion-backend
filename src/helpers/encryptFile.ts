import * as crypto from 'crypto';

function encryptFile(buffer: Buffer, encryptionKey: Buffer, initializationVector: Buffer): Buffer {
  
    // Encryption settings
    const cipher = crypto.createCipheriv('aes-256-cbc', encryptionKey, initializationVector);

    return Buffer.concat([cipher.update(buffer), cipher.final()]);
}

export default encryptFile
