const cp = require('child_process')//importing child process module

cp.execSync('calc') //to display calcultor

cp.execSync('start chrome') // To start a chrome
cp.execSync('start chrome https://www.google.com/') // To open a particular web page

console.log('output ' + cp.execSync('node demo.js')) //To run a javascript file and get the output of it
