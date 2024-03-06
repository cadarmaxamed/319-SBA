import express from 'express';
import northAfrica from './database/northAfrica.mjs'
import { ObjectId } from 'mongodb';

const router = express.Router();

// Get all North African countries
router.get('/', async (req, res) => {
  let collection = await database.collection('northAfrica');
  let result = await collection.find({}).limit(10).toArray();
  res.json(result);
});

// Get a single North African country by ID
router.get('/:id', async (req, res) => {
  let collection = await database.collection('northAfrica');
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.status(404).send('Not found');
  else res.status(200).send(result);
});

// Create a new North African country
router.post('/', async (req, res) => {
  let collection = await database.collection('northAfrica');
  let result = await collection.insertOne(req.body);
  res.status(201).send(result.ops[0]);
});

// Update an existing North African country by ID
router.patch('/:id', async (req, res) => {
  let collection = await database.collection('northAfrica');
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.updateOne(query, { $set: req.body });

  if (result.modifiedCount === 0) res.status(404).send('Not found');
  else res.status(200).send('Updated successfully');
});

// Delete a North African country by ID
router.delete('/:id', async (req, res) => {
  let collection = await database.collection('northAfrica');
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.deleteOne(query);

  if (result.deletedCount === 0) res.status(404).send('Not found');
  else res.status(204).send();
});

export default router;
