const Equipment = require("../models/equipment");

const getEquipments = async (req, res, next) => {
  try {
    const equipments = await Equipment.find({
      owner: req.user._id,
    });

    res.send(equipments);
  } catch (error) {
    next(error);
  }
};

const createEquipment = async (req, res, next) => {
  try {
    const equipment = await Equipment.create({
      ...req.body,
      owner: req.user._id,
    });

    res.status(201).send(equipment);
  } catch (error) {
    next(error);
  }
};

const deleteEquipment = async (req, res, next) => {
  try {
    const equipment = await Equipment.findById(req.params.id).select("+owner");

    if (!equipment) {
      return res.status(404).send({
        message: "Equipo no encontrado",
      });
    }

    if (equipment.owner.toString() !== req.user._id) {
      return res.status(403).send({
        message: "No autorizado",
      });
    }

    await equipment.deleteOne();

    return res.send({
      message: "Equipo eliminado",
    });
  } catch (error) {
    return next(error);
  }
};

const updateEquipment = async (req, res, next) => {
  try {
    const equipment = await Equipment.findById(req.params.id).select("+owner");

    if (!equipment) {
      return res.status(404).send({
        message: "Equipo no encontrado",
      });
    }

    if (equipment.owner.toString() !== req.user._id) {
      return res.status(403).send({
        message: "No autorizado",
      });
    }

    const updatedEquipment = await Equipment.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    return res.send(updatedEquipment);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getEquipments,
  createEquipment,
  deleteEquipment,
  updateEquipment,
};
