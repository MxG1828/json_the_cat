const request = require("request");
const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?name=${breed}`, (err, response, body) => {
  if (err) {
    console.log(err);
    return;
  }
  if (body.length === 2) {
    console.log("breed not found.");
  } else {
    const data = JSON.parse(body);
    console.log(data);
  }
});
