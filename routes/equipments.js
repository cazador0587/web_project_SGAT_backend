const router = require("express").Router();

const auth = require("../middlewares/auth");

const {
  getEquipments,
  createEquipment,
  deleteEquipment,
} = require("../controllers/equipments");

router.get("/equipments", auth, getEquipments);

router.post("/equipments", auth, createEquipment);

router.delete("/equipments/:id", auth, deleteEquipment);

module.exports = router;
