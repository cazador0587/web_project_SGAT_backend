const router = require("express").Router();

const auth = require("../middlewares/auth");

const {
  getEquipments,
  createEquipment,
  deleteEquipment,
  updateEquipment,
} = require("../controllers/equipments");

const {
  validateCreateEquipment,
  validateEquipmentId,
  validateUpdateEquipment,
} = require("../middlewares/validators");

router.get("/equipments", auth, getEquipments);
router.post("/equipments", auth, validateCreateEquipment, createEquipment);
router.patch("/equipments/:id", auth, validateUpdateEquipment, updateEquipment);
router.delete("/equipments/:id", auth, validateEquipmentId, deleteEquipment);

module.exports = router;
