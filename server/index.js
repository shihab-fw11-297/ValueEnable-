const cors = require("cors");
const exp = require("express");
const bp = require("body-parser");
const passport = require("passport");
const { connect } = require("mongoose");
const { success, error } = require("consola");
const userController = require('./routes/userRoutes');


// Bring in the app constants
const { DB, PORT } = require("./config");
const PORT = process.env.APP_PORT || 5000
// Initialize the application
const app = exp();

// Middlewares
app.use(cors());
app.use(bp.json());
app.use(passport.initialize());

// User Passport Middleware
require("./middlewares/passport")(passport);

// User Router Middleware
app.use("/api/users", userController);

const startApp = async () => {
    try {
      // Connection With DB
      await connect(DB);
  
      success({
        message: `Successfully connected with the Database `,
        badge: true
      });
  
      // Start Listenting for the server on PORT
      app.listen(PORT, () =>
        success({ message: `Server started on PORT ${PORT}`, badge: true })
      );
    } catch (err) {
      error({
        message: `Unable to connect with Database \n${err}`,
        badge: true
      });
      startApp();
    }
  };
  
  startApp();