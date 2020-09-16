const path = require("path");

module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    mode: "development"
};