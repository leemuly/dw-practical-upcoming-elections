const statePlaceOCDIDGen = (reqObj) => {
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

module.exports = statePlaceOCDIDGen;
