const jwt = require('jsonwebtoken');
const config = require('./config');


module.exports = function(req, res, next) {
  try{
    const token = req.headers.authorization      // req.headers.authorization.split(' ')[1];
    var decoded = jwt.verify(token, config.secret);
    req.userData = decoded;
    next();
  }catch(err){
    return res.status(403).json({
      "message": "Not Authenticated"
    })
  }
  //       const { authorization } = req.headers;
//      const token = authorization.split(' ')[1];
//      try {
//           const jt = await jwt.verify(token, config.secret);
//           //do something
//           req.userData = jt;
//             next();
//      } catch (error) {
//           res.status(401).send("Unauthorized");
//      }
}
