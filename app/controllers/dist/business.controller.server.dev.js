"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DisplayBusinessList = DisplayBusinessList;
exports.DisplayBusinessAddPage = DisplayBusinessAddPage;
exports.ProcessBusinessAddPage = ProcessBusinessAddPage;
exports.DisplayBusinessUpdatePage = DisplayBusinessUpdatePage;
exports.ProcessBusinessUpdatePage = ProcessBusinessUpdatePage;
exports.ProcessBusinessDelete = ProcessBusinessDelete;

var _business = _interopRequireDefault(require("../models/business.js"));

var _index = require("../utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function DisplayBusinessList(req, res, next) {
  _business["default"].find(function (err, Contact) {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.render('index', {
      title: 'Business Contact List',
      page: 'business/list',
      contact: Contact,
      displayName: (0, _index.UserDisplayName)(req)
    });
  });
}

function DisplayBusinessAddPage(req, res, next) {
  res.render('index', {
    title: 'Add Name',
    page: 'business/edit',
    contact: {},
    displayName: (0, _index.UserDisplayName)(req)
  });
}

function ProcessBusinessAddPage(req, res, next) {
  var newContact = (0, _business["default"])({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    companyName: req.body.companyName,
    emailAddress: req.body.emailAddress,
    phoneNumber: req.body.phoneNumber
  });

  _business["default"].create(newContact, function (err, Contact) {
    if (err) {
      console.error(err);
      res.end(err);
    }

    ;
    res.redirect('/business-list');
  });
}

function DisplayBusinessUpdatePage(req, res, next) {
  var id = req.params.id;

  _business["default"].findById(id, function (err, Contact) {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.render('index', {
      title: 'Update Contact',
      page: 'business/edit',
      contact: Contact,
      displayName: (0, _index.UserDisplayName)(req)
    });
  });
}

function ProcessBusinessUpdatePage(req, res, next) {
  var id = req.params.id;
  var newContact = (0, _business["default"])({
    _id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    companyName: req.body.companyName,
    emailAddress: req.body.emailAddress,
    phoneNumber: req.body.phoneNumber
  });

  _business["default"].updateOne({
    _id: id
  }, newContact, function (err, Contact) {
    if (err) {
      console.error(err);
      res.end(err);
    }

    ;
    res.redirect('/business-list');
  });
}

function ProcessBusinessDelete(req, res, next) {
  var id = req.params.id;

  _business["default"].remove({
    _id: id
  }, function (err) {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.redirect('/business-list');
  });
}