// var tap = require('tap');
// var { OCDIDGen, getElections }= require('../jsUtils');

// const testData = [ { state: "MA", city: "Wayland" }, { state: "FL", city: "South Miami" } ];

// const prefix = 'ocd-division/country:us/';
// const MAOCDIDs = {
//   state: prefix + `state:ma`,
//   place: prefix + `state:ma/place:wayland`
// }
// const FLOCDIDs = {
//   state: prefix + `state:fl`,
//   place: prefix + `state:fl/place:south_miami`
// }

// tap.test("OCDIDGen generates the correct state and place OCDID", tap => {
//   tap.equal(OCDIDGen(testData[0]), MAOCDIDs, "single word state and place generate correct OCDID"),
//   tap.equal(OCDIDGen(testData[1]), FLOCDIDs, "double word place and state generate correct OCDID")
// })

// tap.test("getElections returns expected number of results", async tap => {
  // tap.equal(await getElections(MAOCDIDs.state, MAOCDIDs.place).length, 1, "one result in MA"),
  // tap.equal(await getElections(FLOCDIDs.state, FLOCDIDs.place).length, 2, "two results in FL")
// })
