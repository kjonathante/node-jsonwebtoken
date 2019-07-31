"use strict";
const jwt = require("./jwt");

var payload = {
  data1: "Data 1",
  data2: "Data 2",
  data3: "Data 3",
  data4: "Data 4"
};

var token = jwt.sign(payload);
console.log("Token :" + token);

var legit = jwt.verify(token);
console.log("JWT verification result: ", legit);

/*
 ====================   JST Decode =====================
*/
var decoded = jwt.decode(token);
console.log("Decoded jwt: ", decoded);
