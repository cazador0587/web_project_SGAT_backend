const { celebrate, Joi } = require("celebrate");

const validateSignup = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

const validateSignin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),
});

const validateCreateEquipment = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required(),
    brand: Joi.string().required(),
    model: Joi.string().required(),
    serial: Joi.string().required(),
    type: Joi.string().required(),
    location: Joi.string().required(),
    responsible: Joi.string().required(),
    status: Joi.string().valid("activo", "reparacion", "baja"),
    observations: Joi.string().allow(""),
  }),
});

const validateEquipmentId = celebrate({
  params: Joi.object().keys({
    id: Joi.string().hex().length(24).required(),
  }),
});

const validateUpdateEquipment = celebrate({
  params: Joi.object().keys({
    id: Joi.string().hex().length(24).required(),
  }),
  body: Joi.object()
    .keys({
      name: Joi.string(),
      brand: Joi.string(),
      model: Joi.string(),
      serial: Joi.string(),
      type: Joi.string(),
      location: Joi.string(),
      responsible: Joi.string(),
      status: Joi.string().valid("activo", "reparacion", "baja"),
      observations: Joi.string().allow(""),
    })
    .min(1),
});

module.exports = {
  validateSignup,
  validateSignin,
  validateCreateEquipment,
  validateEquipmentId,
  validateUpdateEquipment,
};
