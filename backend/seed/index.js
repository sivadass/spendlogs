const citySeed = require("./city");
const categorySeed = require("./category");

const seedData = async () => {
  try {
    const city = await citySeed();
    const category = await categorySeed();
    return {
      message: "Data seeded successfully!",
      data: {
        city: city,
        category: category
      }
    };
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = seedData;
