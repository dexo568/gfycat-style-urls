DISCLAIMER: I am not associated with https://gfycat.com/. I just admire their url/id system, and decided to replicate its functionality in an npm package.

This repository generates animal/adjective string combinations, useful for creating memorable ID strings for whatever purpose you wish. 

Simple usage:

generateCombination(numAdjectives, delimiter)
	numAdjectives is the number of randomly generated adjectives you'd like the animal to be preceded by.
	delimiter is a string to put between each randomly chosen word, like "_" or "-".

	Examples: 
	generateCombination(2, "") -> CuriousRedCrow
	generateCombination(4, "_") -> Tranquil_Sneaky_Juicy_Electric_Gerbil