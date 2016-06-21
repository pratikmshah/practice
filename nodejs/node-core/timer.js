// using the setTimeout function will delay execution by however many miliseconds you provide it
var wait = 3000;
var currentTime = 0;
var waitInterval = 25;
var percentWaited = 0;

//console.log("Wait for it");

function writeWaitingPercent(p) {
  process.stdout.clearLine();               // clear the last line in command line
  process.stdout.cursorTo(0);               // move cursor back to beginning
  process.stdout.write(`waiting... ${p}%`);  // write the precentage
}

// setInterval will fire every X miliseconds
var interval = setInterval(function() {
  currentTime += waitInterval;
  percentWaited = Math.floor((currentTime/wait) * 100);
  writeWaitingPercent(percentWaited);
  //console.log(`waiting ${currentTime/1000} seconds...`);
}, waitInterval);

setTimeout(function() {
  clearInterval(interval);  // stop interval from running
  writeWaitingPercent(100);
  console.log("\n\n" + "DONE!" + "\n\n");
}, wait);

process.stdout.write("\n\n");

writeWaitingPercent(percentWaited);