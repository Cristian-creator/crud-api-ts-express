import { MongoClient } from 'mongodb';

// add default value because TS expects a type
const {
    MONGO_URI = '',
} = process.env;

export const client = new MongoClient(
    'mongodb+srv://cristian2:aSIZ93t9ZAljQr9T@cluster0.mpqdlwu.mongodb.net/?retryWrites=true&w=majority',
    );
export const db = client.db();
