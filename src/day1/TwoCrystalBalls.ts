export default function two_crystal_balls(breaks: boolean[]): number {
	const jmpAmpunt = Math.floor(Math.sqrt(breaks.length));

	let i = jmpAmpunt;
	for (; i < breaks.length; i += jmpAmpunt) {
		if (breaks[i]) {
			break;
		}
	}
	i -= jmpAmpunt

	for (let j = 0; j< breaks.length; j++, i++) {
		if (breaks[i]) {
			return i
		}
	}

	return -1

}
