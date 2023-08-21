import status from 'http-status';
import multer from 'multer';
import response from '../../helpers/response';
import { Request, Response } from 'express';
import encryptFile from '../../helpers/encryptFile';
import decryptFile from '../../helpers/decryptFile';
import * as fs from 'fs';
import * as crypto from 'crypto';

// create a user
export const uploadDocument = async (req: Request, res: Response) => {
  try {

    const {file} = req

    if (!file) {
      res.status(400).json({ error: 'No file uploaded.' });
      return;
    }

    
    const encryptionKey = crypto.randomBytes(32);
    const initializationVector = crypto.randomBytes(16);

    const { originalname, buffer } = file;


    const encryptedBuffer = encryptFile(buffer, encryptionKey, initializationVector)

    console.log(encryptedBuffer)
    // Save encrypted data to MongoDB
    
    // const encryptedFile = new EncryptedFile({
    //   filename: originalname,
    //   encryptedData: encryptedBuffer,
    // });
    // await encryptedFile.save();

    
    // Example usage
    // const decryptionKey = Buffer.from('yourDecryptionKey'); // Use the same key used for encryption
    // // const initializationVector = Buffer.from('yourInitializationVector'); // Use the same IV used for encryption
    // const encryptedFilename = 'yourEncryptedFileName';

    // const decrypt = decryptFile(encryptedBuffer, encryptionKey, encryptedFilename);

    res.status(200).json({ message: 'File uploaded and encrypted successfully.', data: {
      name: originalname,
      file: encryptedBuffer
    } });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while processing the request.' });
  }
};

