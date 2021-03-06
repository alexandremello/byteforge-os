var home = require("./homepath");
var path = require("path");
var childProcess = require("child_process");

var commandPath = path.join(home(), ".bfos/bin/bfmemusage");

module.exports = function(update) {
  var updateMemory = () => {
    var command = childProcess.spawn(commandPath);
    command.stdout.on("data", function(data) {
      update("memory", [
        "\uf078",
        data.toString()
      ].join(" "));
    });
    setTimeout(updateMemory, 60000);
  };
  updateMemory();
};
