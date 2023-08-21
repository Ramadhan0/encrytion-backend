import * as crypto from 'crypto';
import fs from 'fs';

async function decryptFile(encryptedData: Buffer, decryptionKey: Buffer, iv: Buffer, filename: string): Promise<void> {
  try {


    const decipher = crypto.createDecipheriv('aes-256-cbc', decryptionKey, iv);

    const decryptedBuffer = Buffer.concat([decipher.update(encryptedData), decipher.final()]);

    const decryptedFilePath = `path/to/decrypted/${filename}`;
    console.log('File decrypted and saved:', decryptedFilePath);
    return fs.writeFileSync(decryptedFilePath, decryptedBuffer);
  } catch (error) {
    return console.error('An error occurred while decrypting the file:', error);
  }
}

export default decryptFile
