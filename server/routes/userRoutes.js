const router = require("express").Router()
// Bring in the User Registration function
const {
    userRegister,
    userLogin,
    userAuth,
    serializeUser,
    checkRole,
} = require("../utils/Auth");

// Users Registeration Route
router.post("/register-user", async (req, res) => {
    await userRegister(req.body, "customer", res);
});

// Admin Registration Route
router.post("/register-admin", async (req, res) => {
    await userRegister(req.body, "admin", res);
});

// moderator Registration Route
router.post("/register-moderator", async (req, res) => {
    await userRegister(req.body, "moderator", res);
});

// Users Login Route
router.post("/login-user", async (req, res) => {
    await userLogin(req.body, "customer", res);
});

// Admin Login Route
router.post("/login-admin", async (req, res) => {
    await userLogin(req.body, "admin", res);
});

// moderator Login Route
router.post("/login-moderator", async (req, res) => {
    await userLogin(req.body, "moderator", res);
});

// Profile Route
router.get("/profile", userAuth, async (req, res) => {
    return res.json(serializeUser(req.user));
});


// Users Protected Route
router.get(
    "/user-protectd",
    userAuth,
    checkRole(["customer"]),
    async (req, res) => {
        return res.json("Hello customer");
    }
);

// Admin Protected Route
router.get(
    "/admin-protectd",
    userAuth,
    checkRole(["admin"]),
    async (req, res) => {
        return res.json("Hello Admin");
    }
);

// moderator Protected Route
router.get(
    "/moderator-protectd",
    userAuth,
    checkRole(["moderator"]),
    async (req, res) => {
      return res.json("Hello moderator");
    }
  );

module.exports = router
