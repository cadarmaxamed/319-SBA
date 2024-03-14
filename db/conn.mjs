import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();
//creating connection string
const connectionString = process.env.MONGO_URI || '';

const client = new MongoClient(connectionString);

let conn;

try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

let db = conn.db('Africa');

//creating indexes here (well tried)
//EastAfrica.createIndex( { "_id": 1 }, { unique: true } );


export default db;
