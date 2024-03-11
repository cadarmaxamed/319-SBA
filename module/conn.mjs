import { MongoClient } from 'mongodb';

const urlencoded = "mongodb+srv://cadar97:Maxdar@2020@cluster0.f492ptg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//databasename
const dbName = 'Africa';

// MongoClient
const client = new MongoClient(urlencoded);

//connect to the server
async function connect() {
    try{
        await client.connect();
        console.log("You are all Connected");
        //conect to databasename
        const db = client.db(dbName);
        return db;
    } catch (error) {
        console.error("Connection Error:", error);
        throw error;
    }
}
export default connect;
