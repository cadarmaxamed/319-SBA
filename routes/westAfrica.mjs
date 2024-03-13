import express from 'express';
import db from '../db/conn.mjs';
import { ObjectId } from 'mongodb';

const router = express.Router();

// Get all East African countries (checked)
router.get('/', async (req, res) => {
  let collection = await db.collection('WestAfrica');
  let result = await collection.find({}).limit(10).toArray();
  res.send(result).status(200);
});

// Get a single East African country by ID (checked)
router.get('/:id', async (req, res) => {
  let collection = await db.collection('WestAfrica');
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.status(404).send('Not found');
  else res.status(200).send(result);
});

// Create a new East African country (Checked!!!)
router.post('/', async (req, res) => {
  let collection = await db.collection('WestAfrica');
  let newDocument = req.body;

  if(newDocument.id) {
    newDocument._id = newDocument.id;
    delete newDocument.id;
  }
  let result = await collection.insertOne(req.body);
  res.status(201).send(result.ops[0]);
});

// Update an existing East African country by ID
router.patch('/:id', async (req, res) => {
  let collection = await db.collection('WestAfrica');
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.updateOne(query, { $set: req.body });

  if (result.modifiedCount === 0) res.status(404).send('Not found');
  else res.status(200).send('Updated successfully');
});



// Delete an East African country by ID
router.delete('/:id', async (req, res) => {
  let collection = await db.collection('WestAfrica');
  let query = { _id: Number(req.params.id) };
  let result = await collection.deleteOne(query);

  if (result.deletedCount === 0) res.status(404).send('Not found');
  else res.status(204).send(result);
});

export default router;