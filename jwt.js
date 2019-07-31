const fs = require("fs");
const jwt = require("jsonwebtoken");
// http://travistidwell.com/blog/2013/09/06/an-online-rsa-public-and-private-key-generator/
// use 'utf8' to get string instead of byte array  (1024 bit key)
var privateKey = fs.readFileSync("./jwt.key", "utf8"); // to sign JWT
var publicKey = fs.readFileSync("./jwt.key.pub", "utf8"); // to verify JWT

module.exports = {
  sign: payload => {
    // Token signing options 
    var signOptions = {
      expiresIn: "30d", // 30 days validity
      algorithm: "RS256" // RSASSA options[ "RS256", "RS384", "RS512" ]
    };
    return jwt.sign(payload, privateKey, signOptions);
  },

  verify: token => {
    var verifyOptions = {
      algorithm: ["RS256"]
    };
    try {
      return jwt.verify(token, publicKey, verifyOptions);
    } catch (err) {
      return false;
    }
  },

  decode: token => {
    return jwt.decode(token, { complete: true });
  }
};
