import Joi from 'joi';

export default function validatePhoto(photo) {
  const schema = {
    url: Joi.string().required(),
    title: Joi.string(),


  };
  return Joi.validate(photo, schema);
}
