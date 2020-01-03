const City = require("../model/City");
const cities = require("../constants/cities");

const citySeed = async () => {
  City.deleteMany({}, (err, res) => {
    if (res) {
      City.insertMany(cities, (err, res) => {
        if (err) {
          console.log("City Insert Error ==>", err);
        }
        if (res) {
          return {
            message: `Inserted ${res.length} cities`
          };
        }
      });
    } else {
      console.log("City Remove Error ==>", err);
    }
  });
};

module.exports = citySeed;
