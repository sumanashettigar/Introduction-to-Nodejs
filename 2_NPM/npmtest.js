//This is used to test th figlet function that we have installed .
const figlet = require('figlet')

figlet("Hello World!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
