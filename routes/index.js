const router = require("express").Router();

const userRoutes = require("./users");
const equipmentRoutes = require("./equipments");

router.use(userRoutes);
router.use(equipmentRoutes);

module.exports = router;
