const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';  
const client = new MongoClient(uri, { useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    
    console.log('Database has been successfully connected......')
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

function getClient() {
  return client;
}

module.exports = { connectToDatabase, getClient };
