const Joi = require("@hapi/joi");

const registerValidation = data => {
  const schema = {
    name: Joi.string()
      .min(6)
      .required(),
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required(),
    role: Joi.string()
  };
  return Joi.validate(data, schema);
};

const loginValidation = data => {
  const schema = {
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
  };
  return Joi.validate(data, schema);
};

const categoryValidation = data => {
  const schema = {
    value: Joi.string()
      .min(3)
      .max(200)
      .required(),
    label: Joi.string()
      .min(3)
      .max(200)
      .required()
  };
  return Joi.validate(data, schema);
};

const cityValidation = data => {
  const schema = {
    value: Joi.string()
      .min(3)
      .max(200)
      .required(),
    label: Joi.string()
      .min(3)
      .max(200)
      .required()
  };
  return Joi.validate(data, schema);
};

const jobValidation = data => {
  const schema = {
    title: Joi.string()
      .min(6)
      .max(200)
      .required(),
    description: Joi.string()
      .min(20)
      .required(),
    cityId: Joi.string().required(),
    categoryId: Joi.string().required(),
    pay: Joi.object().keys({
      minimum: Joi.number()
        .min(1)
        .required(),
      maximum: Joi.number()
        .min(1)
        .required()
    }),
    experience: Joi.number()
      .min(1)
      .required()
  };
  return Joi.validate(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.jobValidation = jobValidation;
module.exports.categoryValidation = categoryValidation;
module.exports.cityValidation = cityValidation;
