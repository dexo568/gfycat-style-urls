const adjectives = require('./adjectives'),
	animals = require('./animals');

module.exports = {
	generateCombination(numAdjectives, delimiter, capitalizeFirstLetter) {
		let combination = '';

		for (let i = 0; i < numAdjectives; i++) {
			combination += capitalizeFirstLetter
				? adjectives[Math.floor(Math.random() * adjectives.length)].charAt(0).toUpperCase() + delimiter
				: adjectives[Math.floor(Math.random() * adjectives.length)] + delimiter;
		}

		combination += capitalizeFirstLetter
			? animals[Math.floor(Math.random() * animals.length)].charAt(0).toUpperCase()
			: animals[Math.floor(Math.random() * animals.length)];
		return combination;
	}
};
