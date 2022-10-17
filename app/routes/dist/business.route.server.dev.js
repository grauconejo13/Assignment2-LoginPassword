"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _businessControllerServer = require("../controllers/business.controller.server.js");

var _index = require("../utils/index.js");

var router = (0, _express.Router)();
router.get('/business-list', _businessControllerServer.DisplayBusinessList);
router.get('/business-add', _index.AuthGuard, _businessControllerServer.DisplayBusinessAddPage);
router.post('/business-add', _index.AuthGuard, _businessControllerServer.ProcessBusinessAddPage);
router.get('/business-edit/:id', _index.AuthGuard, _businessControllerServer.DisplayBusinessUpdatePage);
router.post('/business-edit/:id', _index.AuthGuard, _businessControllerServer.ProcessBusinessUpdatePage);
router.get('/business-delete/:id', _index.AuthGuard, _businessControllerServer.ProcessBusinessDelete);
var _default = router;
exports["default"] = _default;