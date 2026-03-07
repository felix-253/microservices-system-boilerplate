import Joi from 'joi';

export const envConfig = Joi.object({
  PORT: Joi.number().required(),
  HOST: Joi.string().required(),
  SERVICE_NAME: Joi.string().required(),
  DB_HOST: Joi.string().required(),
  DB_PORT: Joi.number().required(),
  DB_USER: Joi.string().required(),
  DB_PASS: Joi.string().required(),
  DB_NAME: Joi.string().required(),
});
