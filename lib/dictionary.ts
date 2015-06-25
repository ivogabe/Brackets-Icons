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
	 * Returns `undefined` when the filename isn't found.
	 */
	findFileName(fileName: string): T;
	
	/**
	 * Returns an item that can be used if no other icon is found.
	 */
	getEmptyItem(extension: string): T;
}

export function findInDictionary<U>(dictionary: Dictionary<U>, fileName: string): U[] {
	let matches: U[] = [];
	let match = dictionary.findFileName(fileName);
	if (match !== undefined) return [match];
	
	let dotIndex: number;
	let dotIndexNext: number = fileName.indexOf('.');
	
	do {
		dotIndex = dotIndexNext;
		dotIndexNext = fileName.indexOf('.', dotIndex + 1);
		
		match = dictionary.findExtension(fileName.substring(dotIndex + 1));
		if (match !== undefined) {
			matches.push(match);
			return matches;
		}
		
		if (dotIndexNext === -1) {
			break;
		}
		let prefix = fileName.substring(dotIndex + 1, dotIndexNext)
		match = dictionary.findExtensionPrefix(prefix);
		if (match === undefined) {
			// Also allow `js` in `foo.js.php` as a prefix.
			match = dictionary.findExtension(prefix);
		}
		if (match === undefined) {
			// We could have a filename like `foo.php.bar.js`, where `php` and `js` are known extensions.
			// We should only match `js` here, so we need to forget `php`.
			matches = [];
		} else {
			matches.push(match);
		}
	} while (dotIndexNext !== -1);
	
	matches.push(dictionary.getEmptyItem(fileName));
	return matches;
}
