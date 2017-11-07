const adjectives = require('./adjectives'),
	animals = require('./animals');

module.exports = {
	generateCombination(numAdjectives, delimiter) {
		let combination = '';
		console.log('Hello, World!');
		for (let i = 0; i < numAdjectives; i++) {
			combination += adjectives[Math.floor(Math.random() * adjectives.length)] + delimiter;
		}
		combination += animals[Math.floor(Math.random() * animals.length)];
		return combination;
	}
};
