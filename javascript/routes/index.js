var express = require('express');
var router = express.Router();
var axios = require('axios');
var us_states = require('../us_state.js');
var statePlaceOCDIDGen = require('../utils');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Find My Election', states: us_states });
});

router.post('/search', async function(req,res,next) {
  const OCDIDs = statePlaceOCDIDGen(req.body);
  const nearbyElections = await getElections(OCDIDs.state, OCDIDs.place);
  console.dir(nearbyElections, {depth: null});
  res.render('search-results', { title: 'Nearby Elections', nearbyElections: nearbyElections })
})

async function getElections(stateOCDID, placeOCDID){
  try{
    const response = await axios.get(
      'https://api.turbovote.org/elections/upcoming?district-divisions=' + stateOCDID + "," + placeOCDID,
    {
      headers: {
        'Accept': 'application/json'
      }
    })
    return response.data;
  } catch (err){
    console.error(err);
  }
}

module.exports = router;
