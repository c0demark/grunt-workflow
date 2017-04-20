var grunt = require("grunt");
var klawSync = require("klaw-sync");
var appConfig = require("./app.config.json");
// var gruntPluginConfigs = [];
var taskConfig = {};
try {
    klawSync(appConfig.gruntConfigFolder, { nodir: true })
        .filter(function(file) {
            return (/\.(js)$/i).test(file.path);
        })
        .map(function(file) {
            // gruntPluginConfigs.push(require(file.path));
            grunt.util._.extend(taskConfig, require(file.path));
        });
    // console.log(gruntPluginConfigs);
    // gruntPluginConfigs.reduce(function(taskConfig, gruntPluginConfig) {
    //     return grunt.util._.extend(taskConfig, gruntPluginConfig);
    // }, taskConfig);
    // console.log(taskConfig);
} catch (error) {
    console.log(error);
}
grunt.initConfig(taskConfig);
grunt.registerTask("default", ["clean"]);