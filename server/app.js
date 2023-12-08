require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
const morgan = require("morgan");
var cookieParser = require("cookie-parser");
const cors = require("cors");
const jwt= require("./utils/auth/verify")
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

const adminRouter = require("./routes/admin");
const authRouter = require("./routes/auth");
const bookingRouter = require("./routes/booking");
const userRouter = require("./routes/user");
app.use("/v1/admin", adminRouter);
app.use("/v1/auth", authRouter);
app.use("/v1/booking", jwt, bookingRouter);
app.use("/v1/user", jwt, userRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send("error");
});

module.exports = app;
