const {
  login,
  register,
  getAllUsers,
  logOut,
  acceptUser
} = require("../controllers/userController");

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.get("/allusers", getAllUsers);
router.get("/changeState/:id", acceptUser);
router.get("/logout/:id", logOut);

module.exports = router;
