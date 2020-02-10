var axios = require('axios');

// generate state and place OCDIDs
const OCDIDGen = (reqObj) => {
  const prefix = 'ocd-division/country:us/';

  reqObj.state = reqObj.state.toLowerCase();
  reqObj.city = reqObj.city.toLowerCase();

  reqObj.city = reqObj.city.replace(" ", "_");

  const OCDIDs = {
    state: prefix + `state:${reqObj.state}`,
    place: prefix + `state:${reqObj.state}/place:${reqObj.city}`
  }

  return OCDIDs;
}

//api call for nearby elections
const getElections = async (stateOCDID, placeOCDID) => {
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

module.exports = { OCDIDGen, getElections };
