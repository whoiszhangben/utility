if (process.env.NODE_ENV === "production") {
	module.exports = require("./dist/zkutils.min.js");
} else {
	module.exports = require("./dist/zkutils.js");
}
