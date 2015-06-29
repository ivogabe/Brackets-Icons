import { Map, Dictionary } from './dictionary';
import { PresetIcon, StrictPresetIcon } from './icon';
import { setExtensions, setPrefixes, setFileNames, setFullFileNames, getDefault } from './presets';

export class PresetDictionary implements Dictionary<StrictPresetIcon> {
	private extensions: Map<StrictPresetIcon> = {};
	private prefixes: Map<StrictPresetIcon> = {};
	private fullFileNames: Map<StrictPresetIcon> = {};
	private fileNames: Map<Map<StrictPresetIcon>> = {};
	private emptyItem: StrictPresetIcon;
	
	constructor() {
		this.fillMap(this.extensions, setExtensions);
		this.fillMap(this.prefixes, setPrefixes);
		this.fillMap(this.fullFileNames, setFullFileNames);
		this.fillMap2D(this.fileNames, setFileNames);
		
		this.emptyItem = <StrictPresetIcon> getDefault();
		this.makeStrict(this.emptyItem);
	}
	
	findExtension(extension: string) {
		return this.extensions[extension];
	}
	findExtensionPrefix(extension: string) {
		return this.prefixes[extension];
	}
	findFullFileName(fileName: string) {
		return this.fullFileNames[fileName];
	}
	findFileName(fileName: string, extension: string) {
		const map = this.fileNames[fileName]
		if (map === undefined) return undefined;
		if (map[extension] !== undefined) return map[extension];
		return map[''];
	}
	getEmptyItem(fileName: string) {
		return this.emptyItem;
	}
	
	private makeStrict(icon: PresetIcon) {
		for (const key of Object.keys(icon)) {
			if (typeof icon[key] === 'string') {
				icon[key] = [icon[key]];
			}
		}
	}
	private fillMap(map: Map<StrictPresetIcon>, fill: (cb: (keys: string | string[], icon: PresetIcon) => void) => void) {
		fill((keys, icon) => {
			this.makeStrict(icon);
			if (typeof keys === 'string') {
				map[keys] = <StrictPresetIcon> icon;
			} else {
				for (const key of keys) {
					map[key] = <StrictPresetIcon> icon;
				}
			}
		});
	}
	private fillMap2D(map: Map<Map<StrictPresetIcon>>, fill: (cb: (fileNames: string | string[], extensions: string[], icon: PresetIcon) => void) => void) {
		function set(key: string, extensions: string[], icon: StrictPresetIcon) {
			let item = map[key];
			if (item === undefined) {
				item = map[key] = {};
			}
			
			if (extensions === undefined) {
				item[''] = icon;
			} else {
				for (const ext of extensions) {
					item[ext] = icon;
				}
			}
		}
		
		fill((keys, extensions, icon) => {
			this.makeStrict(icon);
			if (typeof keys === 'string') {
				set(keys, extensions, <StrictPresetIcon> icon);
			} else {
				for (const key of keys) {
					set(key, extensions, <StrictPresetIcon> icon);
				}
			}
		});
	}
}

export const presets = new PresetDictionary();
