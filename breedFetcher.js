const request = require("request");

// const errDetec = (err,body) => {
//   if(err = null) {
//     return body;
//   } else {
//     return err;
//   }
// };

const fetchBreedDescription = function (breed, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?name=${breed}`, (err, response, body) => {
    let desc;
    if (body.length === 2) {
      desc = null;
      err = "breed not found";
    } else {
      desc = JSON.parse(body)[0].description;
    }
    callback(err, desc);
  });
};

module.exports = { fetchBreedDescription };
