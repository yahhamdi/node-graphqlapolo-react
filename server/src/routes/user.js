/* eslint-disable no-underscore-dangle */
import express from 'express';
import { pick } from 'lodash';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import validateUser from '../utlis/validateUser';

const router = express.Router();
router.get('/me', async (req, res) => {
  try {
    const token = await req.header('x-auth');
    const decoded = await jwt.verify(token, 'appsecret');
    const id = decoded._id;
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (e) {
    res.status(400).send();
  }
  return null;
});
router.get('/', async (req, res) => {
  try {
    const user = await User.find({});
    res.send({ user });
  } catch (e) {
    res.status(400).send(e);
  }
});
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(404).send();
    }
    res.send({ user });
  } catch (e) {
    res.status(400).send();
  }
  return null;
});
router.post('/', async (req, res) => {
  try {
    const { error } = validateUser(req.body.input);
    if (error) return res.status(400).send(error.details[0].message);
    const user = new User({
      username: req.body.input.username,
      email: req.body.input.email,
      password: bcrypt.hashSync(req.body.input.password, 10),
    });
    const doc = await user.save();
    const access = 'auth';
    const token = jwt.sign({ _id: doc.id }, 'appsecret', { expiresIn: '1h' });
    doc.confirmation_token.push({ access, token });
    doc.save().then(() => token);
    res.header('x-auth', token).send(doc);
  } catch (e) {
    res.status(400).send(e);
  }
  return null;
});
const findByCredentials = (email, password) => User.findOne({ email }).then((user) => {
  if (!user) {
    return Promise.reject();
  }
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password, (err, res) => {
      if (res) {
        resolve(user);
      } else {
        reject();
      }
    });
  });
});
router.post('/login', async (req, res) => {
  try {
    const body = pick(req.body.input, ['email', 'password']);
    const user = await findByCredentials(body.email, body.password);
    const token = jwt.sign({ _id: user.id }, 'appsecret', { expiresIn: '1h' });
    res.header('x-auth', token).send({ user, token });
  } catch (e) {
    res.status(400).send();
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body = pick(req.body.input, ['username', 'email', 'password']);
    const user = await User.findOneAndUpdate({ _id: id }, { $set: body }, { new: true });
    if (!user) {
      return res.status(404).send();
    }
    res.send({ user });
  } catch (e) {
    res.status(400).send();
  }
  return null;
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOneAndRemove({ _id: id });
    if (!user) {
      return res.status(404).send();
    }
    res.send({ user });
  } catch (e) {
    res.status(400).send();
  }
  return null;
});
export default router;
