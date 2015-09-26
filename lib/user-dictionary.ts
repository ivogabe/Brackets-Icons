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
	findFullFileName(fileName: string) {
		return this.settings[fileName];
	}
	findFileName(fileName: string, extension: string) {
		return this.settings[fileName];
	}
	getEmptyItem(fileName: string) {
		return undefined;
	}
}
