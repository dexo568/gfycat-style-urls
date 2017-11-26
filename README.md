DISCLAIMER: I am not associated with https://gfycat.com/. I just admire their url/id system, and decided to replicate its functionality in an npm package.

This repository generates animal/adjective string combinations, useful for creating memorable ID strings for whatever purpose you wish.

Simple usage:

generateCombination(numAdjectives, delimiter, capitalizeFirstLetter) numAdjectives is the number of randomly generated adjectives you'd like the animal to be
preceded by. delimiter is a string to put between each randomly chosen word, like "_" or "-". capitalizeFirstLetter is a boolean to capitalize the first letter
of every adjective and animal (default: false).

    Examples:
	generateCombination(2, "") -> curiousredCrow
	generateCombination(4, "_") -> tranquil_sneaky_juicy_electric_Gerbil
	generateCombination(3, "%", true) -> Sleepy%Smelly%Stinky%Skunk
