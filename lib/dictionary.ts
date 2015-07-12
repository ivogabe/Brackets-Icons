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
	let matches: U[] = [];
	let match = dictionary.findFullFileName(fileName);
	if (match !== undefined) return [match];
	
	let dotIndex: number;
	let dotIndexNext: number = fileName.lastIndexOf('.');
	let extension: string;
	let prefix: string;
	
	const add = () => {
		if (match !== undefined && !compare(matches[matches.length - 1], match)) {
			matches.push(match);
			if (secondMatch && matches.length === 1) return false;
			return true;
		}
		return false;
	}

	do {
		dotIndex = dotIndexNext;
		dotIndexNext = fileName.lastIndexOf('.', dotIndex - 1);
		extension = fileName.substring(dotIndex + 1);
		prefix = fileName.substring(dotIndexNext + 1, dotIndex);

		if (secondMatch) {
			match = dictionary.findExtension(extension);
			if (add()) return matches;
			match = dictionary.findFileName(prefix, extension)
			if (add()) return matches;
		} else {
			match = dictionary.findFileName(prefix, extension);
			if (add()) return matches;
			match = dictionary.findExtension(extension);
			if (add()) return matches;
		}

		match = dictionary.findExtensionPrefix(prefix);
		if (add()) return matches;
		match = dictionary.findExtension(prefix);
		if (add()) return matches;

		// If the prefix matches nothing then as long as we have found something already
		// we can return to avoid filenames like `foo.php.bar.js`, where `php` and `js`
		// are known extensions. We should only match `js` here, so we need to forget `php`.
		if (matches.length > 0) {
			return matches;
		}

	} while (dotIndexNext !== -1);
	
	if (matches.length === 0) {
		matches.push(dictionary.getEmptyItem(fileName));
	}

	return matches;
}
