const fs = require("fs");
const lodash = require("lodash");
const fileName = "./test.json";
//Write a function in node.js that reads this file and returns the number
function readFile() {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    let rawData = JSON.parse(data);

    console.log(rawData);

    // return values of rawData
    let result = rawData.map((item) => {
      const valueArray = item.value;
      return valueArray;
    });

    //sum of all "value" numbers from the file
    var sum = lodash.sum(result);
    console.log(sum);
  });
}

console.log(readFile());
