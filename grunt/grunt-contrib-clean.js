var grunt = require("grunt");
var appConfig = require("./app.config.json");

grunt.loadNpmTasks("grunt-contrib-clean");

module.exports = {
    clean: {
        compile: {
            files: [{
                src: [appConfig.targetCompileFolder]
            }]
        },
        build: {
            src: [appConfig.targetBuildFolder]
        },
        release: {
            src: [appConfig.targetReleaseFolder]
        }
    }
};