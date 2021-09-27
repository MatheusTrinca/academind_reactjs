//POST /api/new-meetup
import { MongoClient } from 'mongodb';

function handler(req, res) {
  if (req.method === 'POST') {
    const { title, image, address, description } = req.body;
    MongoClient.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.9nli6.mongodb.net/meetups?retryWrites=true&w=majority`
    );
  }
}

export default handler;
