var express = require('express');
var router = express.Router();
var us_states = require('../utils/us_state.js');
var { OCDIDGen, getElections }= require('../utils/jsUtils');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Find My Election', states: us_states });
});

/* POST makes API req and displays them in hbs template. */
router.post('/search', async function(req,res,next) {
  const OCDIDs = OCDIDGen(req.body);
  const nearbyElections = await getElections(OCDIDs.state, OCDIDs.place);
  console.dir(nearbyElections, {depth: null});
  res.render('search-results', { title: 'Nearby Elections', nearbyElections: nearbyElections })
})

module.exports = router;
