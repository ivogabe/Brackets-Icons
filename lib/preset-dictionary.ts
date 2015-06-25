import { Map, Dictionary } from './dictionary';
import { PresetIcon, StrictPresetIcon } from './icon';
import { setExtensions, getDefault } from './presets';

export class PresetDictionary implements Dictionary<StrictPresetIcon> {
	private extensions: Map<StrictPresetIcon> = {};
	private prefixes: Map<StrictPresetIcon> = {};
	private fileNames: Map<StrictPresetIcon> = {};
	private emptyItem: StrictPresetIcon;
	
	constructor() {
		this.fillMap(this.extensions, setExtensions);
		this.emptyItem = <StrictPresetIcon> getDefault();
		this.makeStrict(this.emptyItem);
	}
	
	findExtension(extension: string) {
		return this.extensions[extension];
	}
	findExtensionPrefix(extension: string) {
		return this.prefixes[extension];
	}
	findFileName(extension: string) {
		return this.fileNames[extension];
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
}

export const presets = new PresetDictionary();
