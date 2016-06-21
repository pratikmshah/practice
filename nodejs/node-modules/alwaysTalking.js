var sayings = [
  "Skateboard you probably haven't heard of them craft beer tofu 8-bit",
  "Occupy semiotics craft beer, pork belly 8-bit meditation",
  "90's brunch small batch gluten-free. Swag street art letterpress 8-bit",
  "Marfa gochujang readymade master cleanse blog banjo",
  "wee iPhone cronut XOXO shabby chic raw denim man braid portland synth waistcoat gochujang trust fund",
  "Dreamcatcher distillery sartorial gastropub bitters etsy disrupt YOLO"
];

var interval = setInterval(function() {
  var i = Math.floor(Math.random() * sayings.length);
  process.stdout.write(`${sayings[i]} \n`);
}, 1000);

process.stdin.on('data', function(data) {
  console.log(`STDIN Data Recieved -> ${data.toString().trim()}`);
  clearInterval(interval);
  process.exit();
});