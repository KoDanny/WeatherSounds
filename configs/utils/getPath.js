const path = require('path');

const projectRoot = path.resolve(__dirname, '..', '..');

module.exports = function getPath(pathName) {
	return path.resolve(projectRoot, pathName);
};
