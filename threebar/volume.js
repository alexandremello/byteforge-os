var fs = require("fs");

var home = require("./homepath");
var path = require("path");

var FILE = path.join(home(), ".bfvolume");

module.exports = function(update) {
  var readFile = () => fs.readFile(FILE, (err, data) =>  update("volume", ["\uf001", data.toString()].join(" ").replace("\n", "")));

  fs.watchFile(FILE, () => readFile());
  readFile();
};
