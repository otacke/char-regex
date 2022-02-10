export default function allTeluguChars() {
	// Using visual code point representation for better human intelligibility.
	const vowelsIndependent = ["అ", "ఆ", "ఇ", "ఈ", "ఉ", "ఊ", "ఋ", "ౠ", "ఌ", "ౡ", "ఎ", "ఏ", "ఐ", "ఒ", "ఓ", "ఔ"]
	const vowelsDiacritic = ["ా", "ి", "ీ", "ు", "ూ", "ృ", "ౄ", "ౢ", "ౣ", "ె", "ే", "ై", "ొ", "ో", "ౌ"]
	const consonants = ["క", "ఖ", "గ", "ఘ", "ఙ", "చ", "ఛ", "జ", "ఝ", "ఞ", "ట", "ఠ", "డ", "ఢ", "ణ", "త", "థ", "ద", "ధ", "న", "ప", "ఫ", "బ", "భ", "మ", "య", "ర", "ల", "వ", "ళ", "శ", "ష", "స", "హ", "ఱ"]
	const consonantsRare = ["ౘ", "ౙ", "ౚ"]
	const modifiers = ["్", "ఁ", "ం", "ః", "ౕ", "ౖ"]
	const numerals = ["౦", "౧", "౨", "౩", "౪", "౫", "౬", "౭", "౮", "౯", "౸", "౹", "౺", "౻", "౼", "౽", "౾"]

	const doubleCombos = [] // Telugu symbols built out of two code points
	const tripleCombos = [] // Telugu symbols built out of three code points

	// Consonants can be combined with manifold other character modifiers.
	for (const consonant of consonants) {
		// Consonant + vowel.
		for (const vowel of vowelsDiacritic) {
			doubleCombos.push(String.fromCodePoint(consonant.codePointAt(0), vowel.codePointAt(0)))
		}

		// Consonant + special vowel modifier or length mark.
		for (const modifier of modifiers) {
			doubleCombos.push(String.fromCodePoint(consonant.codePointAt(0), modifier.codePointAt(0)))
		}

		// Consonant + consonant (separated by ్  (= \u0c4d = 3149)).
		for (const consonant2 of consonants) {
			tripleCombos.push(String.fromCodePoint(consonant.codePointAt(0), 3149, consonant2.codePointAt(0)))
		}
	}

	// Rare consonants like common consonants, but lack the consonant conjuncts.
	for (const consonant of consonantsRare) {
		// Rare consonant + vowel.
		for (const vowel of vowelsDiacritic) {
			doubleCombos.push(String.fromCodePoint(consonant.codePointAt(0), vowel.codePointAt(0)))
		}

		// Rare consonant + special vowel modifier or length mark.
		for (const modifier of modifiers) {
			doubleCombos.push(String.fromCodePoint(consonant.codePointAt(0), modifier.codePointAt(0)))
		}
	}

	return [...vowelsIndependent, ...consonants, ...consonantsRare, ...numerals, ...doubleCombos, ...tripleCombos]
}
