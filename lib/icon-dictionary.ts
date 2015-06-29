import { Dictionary } from './dictionary';
import { Icon, IconSet, StrictPresetIcon } from './icon';
import { presets } from './preset-dictionary';
import { UserDictionary, UserSettings } from './user-dictionary';

export class IconDictionary implements Dictionary<Icon> {
	user: UserDictionary;
	color = IconSet.ColorLight;
	iconSet = IconSet.IconIon;
	
	constructor(settings: UserSettings = {}) {
		this.user = new UserDictionary(settings);
	}
	
	private toIcon(preset: StrictPresetIcon): Icon {
		if (preset === undefined) return undefined;
		
		let iconData = preset[this.iconSet];
		let colorData = preset[this.color];
		
		if (iconData === undefined || colorData === undefined) return undefined;
		
		return {
			icon: iconData[0],
			size: iconData[1],
			color: colorData[0]
		};
	}
	
	findExtension(extension: string) {
		let match = this.user.findExtension(extension);
		if (match !== undefined) return match;
		
		return this.toIcon(presets.findExtension(extension));
	}
	findExtensionPrefix(extension: string) {
		let match = this.user.findExtensionPrefix(extension);
		if (match !== undefined) return match;
		
		return this.toIcon(presets.findExtensionPrefix(extension));
	}
	findFullFileName(fileName: string) {
		let match = this.user.findFullFileName(fileName);
		if (match !== undefined) return match;
		
		return this.toIcon(presets.findFullFileName(fileName));
	}
	findFileName(fileName: string, extension: string) {
		let match = this.user.findFileName(fileName, extension);
		if (match !== undefined) return match;
		
		return this.toIcon(presets.findFileName(fileName, extension));
	}
	getEmptyItem(fileName: string) {
		const preset = presets.getEmptyItem(fileName);
		let color: string;
		const icon = preset[this.iconSet][0];
		const size = preset[this.iconSet][1];
		
		const dotIndex = fileName.lastIndexOf('.');
		
		if (dotIndex === -1) {
			return {
				icon,
				size,
				color: '#fff'
			};
		}
		
		const extension = fileName.substring(dotIndex + 1);
		let hue = 0;
		let saturnation = 90;
		let lightness = 50;

		for (let i = 0; i < extension.length; ++i) {
			hue += extension.charCodeAt(i) * 42 * (i + 2);
			hue %= 256;
			saturnation = (saturnation + (extension.charCodeAt(i) % 30) + 70) / 2;
			lightness = (lightness + (extension.charCodeAt(i) * 3 % 40) + 30) / 2;
		}

		return {
			color: 'hsl(' + Math.round(hue) + ', ' + Math.round(saturnation) + '%, ' + Math.round(lightness) + '%)',
			icon,
			size
		};
	}
}
