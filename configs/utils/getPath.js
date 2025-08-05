const path = require('path');

const projectRoot = path.resolve(__dirname, '..', '..');

module.exports = function getPath(pathName) {
	console.log('root', projectRoot);
	return path.resolve(projectRoot, pathName);
};
