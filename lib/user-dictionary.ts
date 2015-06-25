import { Icon } from './icon';
import { Dictionary } from './dictionary';

export interface UserSettings {
	[ extension: string ]: Icon;
}

export class UserDictionary implements Dictionary<Icon> {
	settings: UserSettings;
	
	constructor(settings: UserSettings) {
		this.settings = settings;
	}
	
	findExtension(extension: string) {
		return this.settings[extension];
	}
	findExtensionPrefix(extension: string) {
		return this.settings[extension];
	}
	findFileName(extension: string) {
		return this.settings[extension];
	}
	getEmptyItem(fileName: string) {
		return undefined;
	}
}
