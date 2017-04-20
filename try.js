var grunt = require("grunt");
var klawSync = require("klaw-sync");
var appConfig = require("./app.config.json");

klawSync(appConfig.gruntConfigFolder, { nodir: true })
    .filter(function(file) {
        return (/\.(js)$/i).test(file.path);
    })
    .map(function(file) {
        require(file.path);
    });