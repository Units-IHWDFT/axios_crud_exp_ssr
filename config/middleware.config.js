const cookieParser = require("cookie-parser");
const logger = require("morgan");
const express = require("express");
const { join } = require("path");

module.exports = (app) => {
  app.use(express.static(join(__dirname, "..", "public")));
  app.use(logger("dev"));
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};
