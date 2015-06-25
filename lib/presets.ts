import { PresetIcon, IconSet } from './icon';

export function setExtensions(set: (extension: string | string[], icon: PresetIcon) => void) {
	// XML
	set('xml', {
		[IconSet.ColorLight]: '#ff6600',
		[IconSet.IconIon]: 'ion-code',
		[IconSet.IconDev]: 'devicons devicons-code'
	});
	set(['html', 'htm'], {
		[IconSet.ColorLight]: '#e34c26',
		[IconSet.IconIon]: 'ion-code',
		[IconSet.IconDev]: 'devicons devicons-html5'
	});
	set('haml', {
		[IconSet.ColorLight]: '#0270b9',
		[IconSet.IconIon]: 'ion-code',
		[IconSet.IconDev]: 'devicons devicons-code'
	});
	set('hbs', {
		[IconSet.ColorLight]: '#f38709',
		[IconSet.IconIon]: 'ion-code',
		[IconSet.IconDev]: 'devicons devicons-code'
	});
	
	// Stylesheets
	set('css', {
		[IconSet.ColorLight]: '#0270b9',
		[IconSet.IconIon]: ['ion-pound', 12],
		[IconSet.IconDev]: 'devicons devicons-css3_full'
	});
	set(['scss', 'sass'], {
		[IconSet.ColorLight]: '#cb6899',
		[IconSet.IconIon]: ['ion-pound', 12],
		[IconSet.IconDev]: 'devicons devicons-sass'
	});
	set('less', {
		[IconSet.ColorLight]: '#2b5086',
		[IconSet.IconIon]: ['ion-pound', 12],
		[IconSet.IconDev]: 'devicons devicons-less'
	});
	set('styl', {
		[IconSet.ColorLight]: '#b3d107',
		[IconSet.IconIon]: ['ion-pound', 12],
		[IconSet.IconDev]: 'devicons devicons-stylus'
	});
	
	// JavaScript
	set('js', {
		[IconSet.ColorLight]: '#e5a228',
		[IconSet.IconIon]: ['file-icon-c', 13],
		[IconSet.IconDev]: 'devicons devicons-javascript'
	});
	set('es6', {
		[IconSet.ColorLight]: '#4321a9',
		[IconSet.IconIon]: ['file-icon-c', 13],
		[IconSet.IconDev]: 'devicons devicons-javascript'
	});
	set('ts', {
		[IconSet.ColorLight]: '#0074c1',
		[IconSet.IconIon]: ['file-icon-c', 13],
		[IconSet.IconDev]: 'devicons devicons-javascript' // TODO: Better icon
	});
	set('coffee', {
		[IconSet.ColorLight]: '#425d99',
		[IconSet.IconIon]: 'ion-coffee',
		[IconSet.IconDev]: 'devicons devicons-coffeescript'
	});
	set('json', {
		[IconSet.ColorLight]: '#e5a228',
		[IconSet.IconIon]: 'ion-ios-gear',
		[IconSet.IconDev]: 'devicons devicons-javascript' // TODO: Better icon
	});
	set('ls', {
		[IconSet.ColorLight]: '#369bd7',
		[IconSet.IconIon]: 'ion-beaker',
		[IconSet.IconDev]: 'devicons devicons-javascript' // TODO: Better icon
	});
	
	// Server side
	set('php', {
		[IconSet.ColorLight]: '#6976c3',
		[IconSet.IconIon]: 'ion-code-working',
		[IconSet.IconDev]: 'devicons devicons-php'
	});
	set('ctp', {
		[IconSet.ColorLight]: '#417282',
		[IconSet.IconIon]: 'ion-code-working',
		[IconSet.IconDev]: 'devicons devicons-php'
	});
	set('sql', {
		[IconSet.ColorLight]: '#c67f07',
		[IconSet.IconIon]: 'ion-soup-can-outline',
		[IconSet.IconDev]: 'devicons devicons-database'
	});
	
	// Java
	set(['java', 'class'], {
		[IconSet.ColorLight]: '#5382a1',
		[IconSet.IconIon]: 'ion-coffee',
		[IconSet.IconDev]: 'devicons devicons-java'
	});
	set('scala', {
		[IconSet.ColorLight]: '#72d0eb',
		[IconSet.IconIon]: 'ion-navicon-round file-icon-rotated',
		[IconSet.IconDev]: 'devicons devicons-java'
	});
	set('groovy', {
		[IconSet.ColorLight]: '#4298b8',
		[IconSet.IconIon]: 'ion-ios-star',
		[IconSet.IconDev]: 'devicons devicons-groovy'
	});
	
	// TODO: More icons...
}

export function getDefault(): PresetIcon {
	return {
		[IconSet.IconIon]: 'ion-document',
		[IconSet.IconDev]: 'devicons devicons-code_badge'
	};
}
