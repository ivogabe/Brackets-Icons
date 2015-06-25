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
	set('groovy', {
		[IconSet.ColorLight]: '#2f5796',
		[IconSet.IconIon]: 'ion-ios-gear'
	});
	
	// Lua
	set('lua', {
		[IconSet.ColorLight]: '#00207d',
		[IconSet.IconIon]: ['ion-record', 14]
	});
	
	// Clojure
	set('clj', {
		[IconSet.ColorLight]: '#63b132',
		[IconSet.IconIon]: 'ion-aperture'
	});

	// Visual Basic
	set('vb', {
		[IconSet.ColorLight]: '#486dae',
		[IconSet.IconIon]: 'ion-ios-infinite'
	});
	set('vbs', {
		[IconSet.ColorLight]: '#3d047e',
		[IconSet.IconIon]: 'ion-ios-infinite'
	});

	// C-family
	set('hx', {
		[IconSet.ColorLight]: '#ea8220',
		[IconSet.IconIon]: ['file-icon-c', 13]
	});
	set('pl', {
		[IconSet.ColorLight]: '#a4c5eb',
		[IconSet.IconIon]: ['file-icon-c', 13]
	});
	set('c', {
		[IconSet.ColorLight]: '#a8b9cc',
		[IconSet.IconIon]: ['file-icon-c', 13]
	});
	set('cpp', {
		[IconSet.ColorLight]: '#ffd232',
		[IconSet.IconIon]: ['file-icon-c', 13]
	});
	set('cs', {
		[IconSet.ColorLight]: '#5bb552',
		[IconSet.IconIon]: ['file-icon-c', 13]
	});
	set('swift', {
		[IconSet.ColorLight]: '#f16830',
		[IconSet.IconIon]: ['file-icon-c', 13]
	});
	set('dart', {
		[IconSet.ColorLight]: '#36bfb6',
		[IconSet.IconIon]: ['file-icon-c', 13]
	});

	// Ruby
	set(['rb', 'erb', 'rdoc'], {
		[IconSet.ColorLight]: '#9b111e',
		[IconSet.IconIon]: 'ion-heart'
	});
	set('feature', {
		[IconSet.ColorLight]: '#4e8b39',
		[IconSet.IconIon]: 'ion-chatbox-working'
	});

	// Python
	set(['py', 'pyw'], {
		[IconSet.ColorLight]: '#f8c63d',
		[IconSet.IconIon]: 'ion-social-python'
	});
	
	// Qt Quick
	set('qml', {
		[IconSet.ColorLight]: '#42ed0e',
		[IconSet.IconIon]: 'ion-code'
	});

	// Shell and friends
	set('sh', {
		[IconSet.ColorLight]: '#008d00',
		[IconSet.IconIon]: 'ion-android-list'
	});
	set('bat', {
		[IconSet.ColorLight]: '#60c910',
		[IconSet.IconIon]: 'ion-android-list'
	});
	
	// Applications
	set('exe', {
		[IconSet.ColorLight]: '#57a084',
		[IconSet.IconIon]: 'ion-social-windows'
	});
	set('dll', {
		[IconSet.ColorLight]: '#709ead',
		[IconSet.IconIon]: 'ion-social-windows'
	});
	
	// TODO: More icons...
}

export function getDefault(): PresetIcon {
	return {
		[IconSet.IconIon]: 'ion-document',
		[IconSet.IconDev]: 'devicons devicons-code_badge'
	};
}
