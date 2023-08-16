import mongoose from 'mongoose'

const connections = {};

async function dbConnect() {
  if (connections.isConnected) {
    return ;
  }
  const db = await mongoose.connect(process.env.MONGODB_URI);
  connections.isConnected = db.connections[0].readyState;
  
}

export default dbConnect