import { config } from 'dotenv';

config();

export const {
    NODE_ENV,
    PORT,
    DB_URL,
} = process.env;
