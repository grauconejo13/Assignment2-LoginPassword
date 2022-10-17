import businessModel from '../models/business.js';

import { UserDisplayName } from '../utils/index.js';

export function DisplayBusinessList(req, res, next) {
    businessModel.find(function(err, Contact) {
        if (err) {
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Business Contact List', page: 'business/list', contact: Contact, displayName: UserDisplayName(req) });
    })
}

export function DisplayBusinessAddPage(req, res, next) {
    res.render('index', { title: 'Add Name', page: 'business/edit', contact: {}, displayName: UserDisplayName(req) });
}

export function ProcessBusinessAddPage(req, res, next) {

    let newContact = businessModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        companyName: req.body.companyName,
        emailAddress: req.body.emailAddress,
        phoneNumber: req.body.phoneNumber
    });

    businessModel.create(newContact, (err, Contact) => {
        if (err) {
            console.error(err);
            res.end(err);
        };

        res.redirect('/business-list')
    })
}

export function DisplayBusinessUpdatePage(req, res, next) {
    let id = req.params.id;

    businessModel.findById(id, (err, Contact) => {
        if (err) {
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Update Contact', page: 'business/edit', contact: Contact, displayName: UserDisplayName(req) });
    });
}

export function ProcessBusinessUpdatePage(req, res, next) {

    let id = req.params.id;

    let newContact = businessModel({
        _id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        companyName: req.body.companyName,
        emailAddress: req.body.emailAddress,
        phoneNumber: req.body.phoneNumber
    });

    businessModel.updateOne({ _id: id }, newContact, (err, Contact) => {
        if (err) {
            console.error(err);
            res.end(err);
        };

        res.redirect('/business-list')
    })
}

export function ProcessBusinessDelete(req, res, next) {
    let id = req.params.id;

    businessModel.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }

        res.redirect('/business-list');
    })
}