import express from 'express';
import _ from 'lodash';
import Photo from '../models/photo';
import validatePhoto from '../utlis/validatePhoto';

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const photo = await Photo.find({});
    res.send({ photo });
  } catch (e) {
    res.status(400).send(e);
  }
});
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const photo = await Photo.findOne({ _id: id });
    if (!photo) {
      return res.status(404).send();
    }
    res.send({ photo });
  } catch (e) {
    res.status(400).send();
  }
  return null;
});
router.post('/', async (req, res) => {
  try {
    const { error } = validatePhoto(req.body.input);
    if (error) return res.status(400).send(error.details[0].message);
    const photo = new Photo({
      url: req.body.input.url,
      title: req.body.input.title,
    });
    const doc = await photo.save();
    res.send(doc);
  } catch (e) {
    res.status(400).send(e);
  }
  return null;
});
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = _.pick(req.body.input, ['url', 'title']);
    const photo = await Photo.findOneAndUpdate(
      { _id: id },
      { $set: body },
      { new: true }
    );
    if (!photo) {
      return res.status(404).send();
    }
    res.send(photo);
  } catch (e) {
    res.status(400).send();
  }
  return null;
});
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const photo = await Photo.findOneAndRemove({ _id: id });
    if (!photo) {
      return res.status(404).send();
    }

    res.send({ photo });
  } catch (e) {
    res.status(400).send();
  }
  return null;
});

export default router;
