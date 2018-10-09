const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.TaskList
          .find()
          .sort({ date: -1 })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },

    findById: function(req, res) {
        db.TaskList
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    create: function(req, res) {
        db.TaskList
          .create({
            user: req.user._id,
            task_1_Description: req.body.task_1_Description,
            task_1_Location: req.body.task_1_Location,
            task_1_PaymentAmount: req.body.task_1_PaymentAmount,
            task_2_Description: req.body.task_2_Description,
            task_2_PaymentAmount: req.body.task_2_PaymentAmount,
            task_2_Location: req.body.task_2_Location,
            task_3_Description: req.body.task_3_Description,
            task_3_PaymentAmount: req.body.task_3_PaymentAmount,
            task_3_Location: req.body.task_3_Location,
            task_4_Description: req.body.task_4_Description,
            task_4_PaymentAmount: req.body.task_4_PaymentAmount,
            task_4_Location: req.body.task_4_Location,
            total: req.body.total,
            month: req.body.month,
            day: req.body.day,
            year: req.body.year,
            hour: req.body.hour,
            minute: req.body.minute,
            amOrPm: req.body.amOrPm,
            deliveryAddress: req.body.deliveryAddress
          })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        db.TaskList
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        db.TaskList
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      claim1: function(req, res) {
        db.TaskList
          .findOneAndUpdate(
            { _id: req.body.id },
            {$set: { task_1_Runner: req.user._id} })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      claim2: function(req, res) {
        db.TaskList
          .findOneAndUpdate(
            { _id: req.body.id },
            {$set: { task_2_Runner: req.user._id} })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      claim3: function(req, res) {
        db.TaskList
          .findOneAndUpdate(
            { _id: req.body.id },
            {$set: { task_3_Runner: req.user._id} })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      claim4: function(req, res) {
        db.TaskList
          .findOneAndUpdate(
            { _id: req.body.id },
            {$set: { task_4_Runner: req.user._id} })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }


};