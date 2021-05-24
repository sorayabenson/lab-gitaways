const { Router } = require('express');

const Place = require('../models/Place');

module.exports = Router()
  .get('/', async (req, res, next) => {
    const places = await Place.find().exec();
    res.json(places);

    // const places = await Place
      // .find()
      // .skip(parseInt(req.query.skip))
      // .limit(parseInt(req.query.limit))
    //   .exec();
    // res.json(places);

    // const page = req.query.page;
    // const limit = req.query.limit;
    // const startIndex = (page - 1);
    // const endIndex = page * limit
    // const places = await Place.find().exec();
    // const result = {};

    // if(endIndex < places.length) {
    //   result.next = {
    //     page: page+ 1,
    //     limit: limit
    //   };
    // }

    // if(startIndex > 0) {
    //   result.previous = {
    //     page: page - 1,
    //     limit: limit,
    //   };
    // }
    // result.results = places.slice(startIndex, endIndex)
    // res.json(result);
  })
  .get('/:id', async (req, res, next) => {
    const place = await Place.findOne({ _id: req.params.id });
    res.json(place);
  });

    // const page = parseInt(req.query.page);
    // const limit = parseInt(req.query.limit);
    // const startIndex = (page - 1);
    // const endIndex = page * limit
    // const places = await Place.find().exec();
    // const result = {};

    // if(endIndex < places.length) {
    //   result.next = {
    //     page: page+ 1,
    //     limit: limit
    //   };
    // }

    // if(startIndex > 0) {
    //   result.previous = {
    //     page: page - 1,
    //     limit: limit,
    //   };
    // }
    // result.results = places.slice(startIndex, endIndex)
    // res.json(result);