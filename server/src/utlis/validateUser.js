import Joi from 'joi';

export default function validateUser(user) {
  const schema = {
    username: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
  };

  return Joi.validate(user, schema);
}
