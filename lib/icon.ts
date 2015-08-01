export interface Icon {
	icon: string;
	size?: number;
	color: string;
}

export const enum IconSet {
	ColorLight,
	IconIon, // Ionicons
	IconDev // Devicons
}
export function getColorSet(name: string) {
	return IconSet.ColorLight;
}
export function getIconSet(name: string) {
	switch (name.toLowerCase()) {
		case 'dev':
		case 'devicons':
			return IconSet.IconDev;
		default:
			return IconSet.IconIon;
	}
}

export interface PresetIcon {
	[ kind: number /* IconKind */ ]: string | [string, number]
}
export interface StrictPresetIcon extends PresetIcon {
	[ kind: number /* IconKind */ ]: [string, number]
}
