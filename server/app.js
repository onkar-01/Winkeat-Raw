const dotenv = require("dotenv");
const express = require("express");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/error");
const app = express();
const fileUpload = require("express-fileupload"); // for cloudinary use
const Razorpay = require("razorpay");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Cookie parser
app.use(cookieParser());
app.use(cors());
// File upload for cloudinary use
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// Load env vars
dotenv.config({ path: "./config.env" });

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

module.exports = { instance };
// user routes
app.use("/api/user", require("./routes/userAuth"));

// vendor routes
app.use("/api/vendor", require("./routes/vendorAuth"));

// app.get("/api/getkey", (req, res) => {
//   res.status(200).json({
//     key: process.env.RAZORPAY_KEY_ID,
//   });
// });
// error handler middleware
app.use(errorHandler);

// server port

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`); //import port from config.env
});
