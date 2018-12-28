import winston from 'winston';

export default function (err, res) {
  winston.error(err.message, err);

  res.status(500).send('Something failed.');
}
