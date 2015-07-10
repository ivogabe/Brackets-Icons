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

export function findInDictionary<U>(dictionary: Dictionary<U>, fileName: string, compare: (a: U, b: U) => boolean): U[] {
	let matches: U[] = [];
	let match = dictionary.findFullFileName(fileName);
	if (match !== undefined) return [match];
	
	let dotIndex: number;
	let dotIndexNext: number = fileName.indexOf('.');
	
	const add = () => {
		if (!compare(matches[matches.length - 1], match)) matches.push(match);
	};
	
	do {
		dotIndex = dotIndexNext;
		dotIndexNext = fileName.indexOf('.', dotIndex + 1);
		
		match = dictionary.findFileName(fileName.substring(0, dotIndex), fileName.substring(dotIndex + 1));
		if (match !== undefined) matches = [match];
		
		match = dictionary.findExtension(fileName.substring(dotIndex + 1));
		if (match !== undefined) {
			add();
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
			add();
		}
	} while (dotIndexNext !== -1);
	
	match = dictionary.getEmptyItem(fileName);
	add();
	return matches;
}
