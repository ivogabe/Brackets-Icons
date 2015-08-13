import { Icon } from './icon';

export interface Map<T> {
	[ key: string ]: T;
}

export interface Dictionary<T> {
	/**
	 * Returns the item related to this extension.
	 * Should only return on exact matches.
	 * Example: `spec.js` shouldn't match the item of `js`.
	 * Returns `undefined` when the extension isn't found.
	 */
	findExtension(extension: string): T;
	
	/**
	 * Returns the item related to this prefix.
	 * Example: `spec` is the prefix of `foo.spec.js`.
	 * Returns `undefined` when the prefix isn't found.
	 */
	findExtensionPrefix(extension: string): T;
	
	/**
	 * Returns the item related to this filename.
	 * Files like `gulpfile.js` or `package.json` can have other
	 * items than `foo.js` or `foo.json`.
	 * The full filename (example: `gulpfile.js`) will be passed.
	 * Returns `undefined` when the filename isn't found.
	 */
	findFullFileName(fileName: string): T;
	/**
	 * Returns the item related to this filename.
	 * Files like `gulpfile.js` or `package.json` can have other
	 * items than `foo.js` or `foo.json`.
	 * The filename without extension will be passed.
	 * For a file `a.b.c.d` this method can be invoked 3 times:
	 * ('a', 'b.c.d'), ('a.b', 'c.d'), ('a.b.c', 'd').
	 * `findFullFileName` will be invoked once on `a.b.c.d`. 
	 * Returns `undefined` when the filename isn't found.
	 */
	findFileName(fileName: string, extension: string): T;
	
	/**
	 * Returns an item that can be used if no other icon is found.
	 */
	getEmptyItem(extension: string): T;
}

export function findInDictionary<U>(dictionary: Dictionary<U>, fileName: string, secondMatch: boolean, compare: (a: U, b: U) => boolean): U[] {
	fileName = fileName.toLowerCase();
	let match = dictionary.findFullFileName(fileName);
	if (match !== undefined) return [match];

	let matches: U[] = [];
	
	// Start with the longest extension so we match `.foo.bar` before `.bar`.
	let index = fileName.indexOf('.');
	while (index !== -1) {
		const extension = fileName.substring(index + 1);
		match = dictionary.findExtension(extension);
		
		if (!match) {
			index = fileName.indexOf('.', index + 1);
			continue;
		}

		matches = [match];

		if (index !== 0) {
			const prefix = fileName.substring(0, index);
			match = dictionary.findFileName(prefix, extension);
			if (match) matches.push(match);
		}

		break;
	}

	if (secondMatch) {
		if (matches.length === 2) {
			return matches;
		}
	} else {
		if (matches.length === 1) {
			return matches;
		} else if (matches.length === 2) {
			return [matches[1]];
		}
	}

	if (matches.length === 0){
		matches.push(dictionary.getEmptyItem(fileName));
		index = fileName.lastIndexOf('.');
	}

	const primaryIndex = index;

	index = fileName.indexOf('.');
	while (index !== -1 && index < primaryIndex) {
		const prefix = fileName.substring(index + 1, primaryIndex);
		match = dictionary.findExtensionPrefix(prefix)
			|| dictionary.findExtension(prefix);
		
		if (match) {
			if (!compare(matches[0], match)) {
				matches.push(match);
			}
			break;
		}

		index = fileName.indexOf('.', index + 1);
	}

	return matches;
}
