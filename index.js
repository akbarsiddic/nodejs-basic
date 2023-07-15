const moment = require("moment");

const date = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(date);

const message = (name) => {
  console.log(`Hello ${name}`);
};

message("Javascript");
