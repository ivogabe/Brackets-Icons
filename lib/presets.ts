import { PresetIcon, IconSet } from './icon';

interface RegisterIcon {
	(key: string | string[], icon: PresetIcon): void
}
interface RegisterFileNameIcon {
	(fileName: string | string[], extensions: string[], icon: PresetIcon): void
}

export function setExtensions(set: RegisterIcon) {
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
	set('babel.js', {
		[IconSet.ColorLight]: '#f5da55',
		[IconSet.IconIon]: ['file-icon-c', 13],
		[IconSet.IconDev]: 'devicons devicons-javascript'
	});
	set('ts', {
		[IconSet.ColorLight]: '#0074c1',
		[IconSet.IconIon]: ['file-icon-c', 13],
		[IconSet.IconDev]: 'devicons devicons-javascript' // TODO: Better icon
	});
	set('d.ts', {
		[IconSet.ColorLight]: '#0b8f9e',
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
		[IconSet.IconDev]: 'devicons devicons-scala'
	});
	set('groovy', {
		[IconSet.ColorLight]: '#4298b8',
		[IconSet.IconIon]: 'ion-ios-star',
		[IconSet.IconDev]: 'devicons devicons-groovy'
	});
	set('mf', {
		[IconSet.ColorLight]: '#2f5796',
		[IconSet.IconIon]: 'ion-ios-gear',
		[IconSet.IconDev]: 'devicons devicons-aptana' // Looks like a gear
	});
	
	// Lua
	set('lua', {
		[IconSet.ColorLight]: '#00207d',
		[IconSet.IconIon]: ['ion-record', 14]
	});
	
	// Clojure
	set('clj', {
		[IconSet.ColorLight]: '#63b132',
		[IconSet.IconIon]: 'ion-aperture',
		[IconSet.IconDev]: 'devicons devicons-clojure'
	});

	// Visual Basic
	set('vb', {
		[IconSet.ColorLight]: '#486dae',
		[IconSet.IconIon]: 'ion-ios-infinite',
		[IconSet.IconDev]: 'devicons devicons-visualstudio'
	});
	set('vbs', {
		[IconSet.ColorLight]: '#3d047e',
		[IconSet.IconIon]: 'ion-ios-infinite',
		[IconSet.IconDev]: 'devicons devicons-visualstudio'
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
		[IconSet.IconIon]: ['file-icon-c', 13],
		[IconSet.IconDev]: 'devicons devicons-visualstudio'
	});
	set('swift', {
		[IconSet.ColorLight]: '#f16830',
		[IconSet.IconIon]: ['file-icon-c', 13],
		[IconSet.IconDev]: 'devicons devicons-swift'
	});
	set('dart', {
		[IconSet.ColorLight]: '#36bfb6',
		[IconSet.IconIon]: ['file-icon-c', 13],
		[IconSet.IconDev]: 'devicons devicons-dart'
	});

	// Ruby
	set(['rb', 'erb', 'rdoc'], {
		[IconSet.ColorLight]: '#9b111e',
		[IconSet.IconIon]: 'ion-heart',
		[IconSet.IconDev]: 'devicons devicons-ruby'
	});
	set('feature', {
		[IconSet.ColorLight]: '#4e8b39',
		[IconSet.IconIon]: 'ion-chatbox-working',
		[IconSet.IconDev]: 'devicons devicons-ruby'
	});

	// Python
	set(['py', 'pyw'], {
		[IconSet.ColorLight]: '#f8c63d',
		[IconSet.IconIon]: 'ion-social-python',
		[IconSet.IconDev]: 'devicons devicons-python'
	});
	
	// Qt Quick
	set('qml', {
		[IconSet.ColorLight]: '#42ed0e',
		[IconSet.IconIon]: 'ion-code',
		[IconSet.IconDev]: 'devicons devicons-code'
	});

	// Shell and friends
	set('sh', {
		[IconSet.ColorLight]: '#008d00',
		[IconSet.IconIon]: 'ion-android-list',
		[IconSet.IconDev]: 'devicons devicons-terminal'
	});
	set('bat', {
		[IconSet.ColorLight]: '#60c910',
		[IconSet.IconIon]: 'ion-android-list',
		[IconSet.IconDev]: 'devicons devicons-terminal'
	});
	
	// Applications
	set('exe', {
		[IconSet.ColorLight]: '#57a084',
		[IconSet.IconIon]: 'ion-social-windows',
		[IconSet.IconDev]: 'devicons devicons-windows'
	});
	set('dll', {
		[IconSet.ColorLight]: '#709ead',
		[IconSet.IconIon]: 'ion-social-windows',
		[IconSet.IconDev]: 'devicons devicons-windows'
	});
	
	// Templating
	set('jade', {
		[IconSet.ColorLight]: '#00a57a',
		[IconSet.IconIon]: 'ion-egg'
	});

	// Images
	set('png', {
		[IconSet.ColorLight]: '#dbb1a9',
		[IconSet.IconIon]: 'ion-image',
		[IconSet.IconDev]: 'devicons devicons-html5_multimedia'
	});
	set(['jpeg', 'jpg'], {
		[IconSet.ColorLight]: '#dedfa3',
		[IconSet.IconIon]: 'ion-image',
		[IconSet.IconDev]: 'devicons devicons-html5_multimedia'
	});
	set('tiff', {
		[IconSet.ColorLight]: '#ff4000',
		[IconSet.IconIon]: 'ion-image',
		[IconSet.IconDev]: 'devicons devicons-html5_multimedia'
	});
	set('ico', {
		[IconSet.ColorLight]: '#b6d2d1',
		[IconSet.IconIon]: 'ion-image',
		[IconSet.IconDev]: 'devicons devicons-html5_multimedia'
	});
	set('svg', {
		[IconSet.ColorLight]: '#c0c5eb',
		[IconSet.IconIon]: 'ion-image',
		[IconSet.IconDev]: 'devicons devicons-html5_multimedia'
	});
	set('gif', {
		[IconSet.ColorLight]: '#aaecc0',
		[IconSet.IconIon]: 'ion-images',
		[IconSet.IconDev]: 'devicons devicons-html5_multimedia'
	});

	// Videos
	set(['mp4', 'webm', 'ogg'], {
		[IconSet.ColorLight]: '#008d00',
		[IconSet.IconIon]: 'ion-ios-videocam',
		[IconSet.IconDev]: 'devicons devicons-html5_multimedia'
	});

	// Audio
	set(['mp3', 'wav'], {
		[IconSet.ColorLight]: '#921100',
		[IconSet.IconIon]: 'ion-volume-medium',
		[IconSet.IconDev]: 'devicons devicons-html5_multimedia'
	});

	// Fonts
	set('ttf', {
		[IconSet.ColorLight]: '#b42950',
		[IconSet.IconIon]: 'ion-social-tumblr'
	});
	set('eot', {
		[IconSet.ColorLight]: '#b36908',
		[IconSet.IconIon]: 'ion-social-tumblr'
	});
	set(['woff', 'woff2'], {
		[IconSet.ColorLight]: '#7f4bb2',
		[IconSet.IconIon]: 'ion-social-tumblr'
	});
	set('otf', {
		[IconSet.ColorLight]: '#7f4bb2',
		[IconSet.IconIon]: 'ion-social-tumblr'
	});

	// Readme
	set(['md', 'markdown'], {
		[IconSet.ColorLight]: '#b94700',
		[IconSet.IconIon]: ['ion-social-markdown', 12],
		[IconSet.IconDev]: 'devicons devicons-markdown'
	});

	// Git
	set('gitignore', {
		[IconSet.ColorLight]: '#cd5439',
		[IconSet.IconIon]: ['ion-minus-circled', 14],
		[IconSet.IconDev]: 'devicons devicons-git_commit'
	});
	set('gitmodules', {
		[IconSet.ColorLight]: '#f64d27',
		[IconSet.IconIon]: ['ion-fork-repo', 17],
		[IconSet.IconDev]: 'devicons devicons-git_branch'
	});

	// Webservers
	set('htaccess', {
		[IconSet.ColorLight]: '#93a8be',
		[IconSet.IconIon]: ['ion-ios-unlocked', 18]
	});
	set('htpasswd', {
		[IconSet.ColorLight]: '#6c369c',
		[IconSet.IconIon]: ['ion-ios-locked', 18]
	});
	set('conf', {
		[IconSet.ColorLight]: '#009900',
		[IconSet.IconIon]: 'ion-ios-gear',
		[IconSet.IconDev]: 'devicons devicons-aptana' // Looks like a gear
	});

	// Archive
	set('zip', {
		[IconSet.ColorLight]: '#008858',
		[IconSet.IconIon]: 'ion-briefcase',
		[IconSet.IconDev]: ['devicons devicons-netbeans', 17]
	});
	set('rar', {
		[IconSet.ColorLight]: '#005888',
		[IconSet.IconIon]: 'ion-briefcase',
		[IconSet.IconDev]: ['devicons devicons-netbeans', 17]
	});
	set('7z', {
		[IconSet.ColorLight]: '#880058',
		[IconSet.IconIon]: 'ion-briefcase',
		[IconSet.IconDev]: ['devicons devicons-netbeans', 17]
	});
	set('tgz', {
		[IconSet.ColorLight]: '#7900bc',
		[IconSet.IconIon]: 'ion-briefcase',
		[IconSet.IconDev]: ['devicons devicons-netbeans', 17]
	});
	set('tar', {
		[IconSet.ColorLight]: '#885800',
		[IconSet.IconIon]: 'ion-briefcase',
		[IconSet.IconDev]: ['devicons devicons-netbeans', 17]
	});
	set('gz', {
		[IconSet.ColorLight]: '#588800',
		[IconSet.IconIon]: 'ion-briefcase',
		[IconSet.IconDev]: ['devicons devicons-netbeans', 17]
	});
	set('bzip', {
		[IconSet.ColorLight]: '#884300',
		[IconSet.IconIon]: 'ion-briefcase',
		[IconSet.IconDev]: ['devicons devicons-netbeans', 17]
	});
	set('msi', {
		[IconSet.ColorLight]: '#6f8696',
		[IconSet.IconIon]: 'ion-briefcase',
		[IconSet.IconDev]: ['devicons devicons-netbeans', 17]
	});
	set('dmg', {
		[IconSet.ColorLight]: '#6f8696',
		[IconSet.IconIon]: 'ion-briefcase',
		[IconSet.IconDev]: ['devicons devicons-netbeans', 17]
	});
	set('xpi', {
		[IconSet.ColorLight]: '#5bac0d',
		[IconSet.IconIon]: 'ion-briefcase',
		[IconSet.IconDev]: ['devicons devicons-netbeans', 17]
	});
	
	// Settings
	set([
		'project',
		'jscsrc',
		'jshintrc',
		'csslintrc',
		'htmlhintrc',
		'xmlhintrc',
		'todo',
		'classpath',
		'properties',
		'bowerrc',
		'gruntrc',
		'jsrc',
		'pro',
		'editorconfig'
	], {
		[IconSet.ColorLight]: '#777777',
		[IconSet.IconIon]: 'ion-ios-gear',
		[IconSet.IconDev]: 'devicons devicons-aptana' // Looks like a gear
	});
	set('csproj', {
		[IconSet.ColorLight]: '#5bb552',
		[IconSet.IconIon]: ['ion-ios-paper-outline', 18],
		[IconSet.IconDev]: 'devicons devicons-aptana' // Looks like a gear
	});
	set('vbproj', {
		[IconSet.ColorLight]: '#486dae',
		[IconSet.IconIon]: ['ion-ios-paper-outline', 18],
		[IconSet.IconDev]: 'devicons devicons-aptana' // Looks like a gear
	});
	set('sln', {
		[IconSet.ColorLight]: '#87c5de',
		[IconSet.IconIon]: ['ion-ios-paper-outline', 18],
		[IconSet.IconDev]: 'devicons devicons-aptana' // Looks like a gear
	});

	// Other text files
	set('txt', {
		[IconSet.ColorLight]: '#4192c1',
		[IconSet.IconIon]: 'ion-document-text'
	});
	set('log', {
		[IconSet.ColorLight]: '#225dc9',
		[IconSet.IconIon]: 'ion-clipboard'
	});
	set('npmignore', {
		[IconSet.ColorLight]: '#cb3837',
		[IconSet.IconIon]: ['ion-minus-circled', 14],
		[IconSet.IconDev]: 'devicons devicons-npm'
	});
	set('slugignore', {
		[IconSet.ColorLight]: '#0da064',
		[IconSet.IconIon]: ['ion-minus-circled', 14]
	});
	set('dockerignore', {
		[IconSet.ColorLight]: '#0296C9',
		[IconSet.IconIon]: ['ion-minus-circled', 14]
	});
	set('jpmignore', {
		[IconSet.ColorLight]: '#5bac0d',
		[IconSet.IconIon]: ['ion-minus-circled', 14]
	});
	set(['yml', 'yaml'], {
		[IconSet.ColorLight]: '#008000',
		[IconSet.IconIon]: ['ion-navicon', 14]
	});
	set('sqf', {
		[IconSet.ColorLight]: '#b9e11f',
		[IconSet.IconIon]: 'ion-wand'
	});
	
	// LaTeX
	set(['tex', 'bib', 'sty'], {
		[IconSet.ColorLight]: '#262686',
		[IconSet.IconIon]: 'ion-document-text'
	});

	//Singular Types
	set('applescript', {
		[IconSet.ColorLight]: '#afafaf',
		[IconSet.IconIon]: 'ion-social-apple',
		[IconSet.IconDev]: 'devicons devicons-apple'
	});
	set('textile', {
		[IconSet.ColorLight]: '#6f8696',
		[IconSet.IconIon]: 'ion-quote'
	});
	set('matlab', {
		[IconSet.ColorLight]: '#014495',
		[IconSet.IconIon]: 'ion-clipboard'
	});
	set('lisp', {
		[IconSet.ColorLight]: '#f8c63d',
		[IconSet.IconIon]: 'ion-ios-paperplane'
	});
	set('xsl', {
		[IconSet.ColorLight]: '#68217a',
		[IconSet.IconIon]: 'ion-code',
		[IconSet.IconDev]: 'devicons devicons-code'
	});
	set('tcl', {
		[IconSet.ColorLight]: '#c3b15f',
		[IconSet.IconIon]: 'ion-code',
		[IconSet.IconDev]: 'devicons devicons-code'
	});
	set('rst', {
		[IconSet.ColorLight]: '#6f8696',
		[IconSet.IconIon]: 'ion-ios-paper',
		[IconSet.IconDev]: 'devicons devicons-rust'
	});
	set('d', {
		[IconSet.ColorLight]: '#960000',
		[IconSet.IconIon]: 'ion-contrast'
	});
	set('r', {
		[IconSet.ColorLight]: '#8495C0',
		[IconSet.IconIon]: 'ion-ios-analytics'
	});
	set('map', {
		[IconSet.ColorLight]: '#e0591f',
		[IconSet.IconIon]: 'ion-ios-photos-outline'
	});
}

export function setPrefixes(set: RegisterIcon) {
	set(['spec', 'test'], {
		[IconSet.ColorLight]: '#146ae3',
		[IconSet.IconIon]: 'ion-android-radio-button-on'
	});
	set('min', {
		[IconSet.ColorLight]: '#f28b1d',
		[IconSet.IconIon]: ['ion-minus-circled', 14]
	});
}

export function setFullFileNames(set: RegisterIcon) {
	set('Dockerfile', {
		[IconSet.ColorLight]: '#0296C9',
		[IconSet.IconIon]: ['ion-navicon', 14]
		[IconSet.IconDev]: 'devicons devicons-docker'
	});
}
export function setFileNames(set: RegisterFileNameIcon) {
	set('package', ['json'], {
		[IconSet.ColorLight]: '#cb3837',
		[IconSet.IconIon]: 'ion-briefcase',
		[IconSet.IconDev]: 'devicons devicons-npm'
	});
	set('gulpfile', ['js', 'ts', 'coffee', 'babel.js'], {
		[IconSet.ColorLight]: '#eb4a4b',
		[IconSet.IconIon]: 'ion-hammer',
		[IconSet.IconDev]: 'devicons devicons-gulp'
	});
	set('gruntfile', ['js'], {
		[IconSet.ColorLight]: '#fba919',
		[IconSet.IconIon]: 'ion-hammer',
		[IconSet.IconDev]: 'devicons devicons-grunt'
	});
}

export function getDefault(): PresetIcon {
	return {
		[IconSet.IconIon]: 'ion-document',
		[IconSet.IconDev]: 'devicons devicons-code_badge'
	};
}
