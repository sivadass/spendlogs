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
    name: Joi.string()
      .min(1)
      .max(30)
      .required(),
    icon: Joi.string()
      .min(3)
      .max(30)
      .required(),
    color: Joi.string()
      .min(7)
      .max(7)
  };
  return Joi.validate(data, schema);
};

const expenseValidation = data => {
  const schema = {
    amount: Joi.number()
      .min(1)
      .max(99999999)
      .required(),
    payee: Joi.string()
      .min(1)
      .max(50)
      .required(),
    categoryId: Joi.string().required(),
    comment: Joi.string().max(200),
    attachment: Joi.string()
  };
  return Joi.validate(data, schema);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.expenseValidation = expenseValidation;
module.exports.categoryValidation = categoryValidation;
