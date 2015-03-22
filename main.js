define(function (require, exports, module) {
	var defaultIcons = {};
	var userIcons = {};

	// Load preferences
	var PreferencesManager = brackets.getModule("preferences/PreferencesManager");
	var prefs = PreferencesManager.getExtensionPrefs("brackets-icons");
	prefs.definePreference("icons", "object", {});

	function loadPrefs() {
		userIcons = prefs.get("icons");
	}

	function addIcon(extension, icon, color, size) {
		defaultIcons[extension] = {
			icon: icon,
			color: color,
			size: size
		}
	}

	function addAlias(extension, other) {
		defaultIcons[extension] = defaultIcons[other];
	}

	function getDefaultIcon(extension) {
		if (extension === '') {
			return {
				color: '#fff',
				icon: 'ion-document'
			};
		}

		var hue = 0;
		var saturnation = 90;
		var lightness = 50;

		for (var i = 0; i < extension.length; ++i) {
			hue += extension.charCodeAt(i) * 42 * (i + 2);
			hue %= 256;
			saturnation = (saturnation + (extension.charCodeAt(i) % 30) + 70) / 2;
			lightness = (lightness + (extension.charCodeAt(i) * 3 % 40) + 30) / 2;
		}

		return {
			color: 'hsl(' + Math.round(hue) + ', ' + Math.round(saturnation) + '%, ' + Math.round(lightness) + '%)',
			icon: 'ion-document'
		};
	}

	// XML
	addIcon('xml', 'ion-code', '#ff6600');
	addIcon('html', 'ion-code', '#E34C26');
	addIcon('haml', 'ion-code', '#0270b9');
	addAlias('htm', 'html');

	// Stylesheets
	addIcon('css', 'ion-pound', '#0270b9', 12);
	addIcon('scss', 'ion-pound', '#CB6899', 12);
	addAlias('sass', 'scss');
	addIcon('less', 'ion-pound', '#2b5086', 12);
	addIcon('styl', 'ion-pound', '#b3d107', 12);

	// JavaScript
	addIcon('js', 'file-icon-c', '#e5a228', 13);
	addIcon('ts', 'file-icon-c', '#0074c1', 13);
	addIcon('coffee', 'ion-coffee', '#425d99');
	addIcon('json', 'ion-ios-gear', '#e5a228');
	addIcon('ls', 'ion-beaker', '#369bd7');

	// Server side
	addIcon('php', 'ion-code-working', '#6976c3');
	addIcon('sql', 'ion-soup-can-outline', '#c67f07');

	// Java
	addIcon('java', 'ion-coffee', '#5382A1');
	addAlias('class', 'java');
	addIcon('scala', 'ion-navicon-round file-icon-rotated', '#72d0eb');
	addIcon('groovy', 'ion-ios-star', '#4298b8');

	// Lua
	addIcon('lua', 'ion-record', '#00207d', 14);

	// Clojure
	addIcon('clj', 'ion-aperture', '#63b132');

	// Visual Basic
	addIcon('vb', 'ion-ios-infinite', '#486dae');
	addIcon('vbs', 'ion-ios-infinite', '#3d047e');

	// C-family
	addIcon('hx', 'file-icon-c', '#ea8220', 13);
	addIcon('pl', 'file-icon-c', '#a4c5eb', 13);
	addIcon('c', 'file-icon-c', '#a8b9cc', 13);
	addIcon('cpp', 'file-icon-c', '#ffd232', 13);
	addIcon('cs', 'file-icon-c', '#5bb552', 13);
	addIcon('swift', 'file-icon-c', '#f16830', 13);
	addIcon('dart', 'file-icon-c', '#36bfb6', 13);

	// Ruby
	addIcon('rb', 'ion-heart', '#9b111e');
	addAlias('erb', 'rb');
	addAlias('rdoc', 'rb');
	addIcon('feature', 'ion-chatbox-working', '#4e8b39');

	// Python
	addIcon('py', 'ion-social-python', '#f8c63d');
	addAlias('pyw', 'py');

	// Shell and friends
	addIcon('sh', 'ion-document-text', '#008d00');
	addIcon('bat', 'ion-social-windows', '#60c910');

	// Templating
	addIcon('jade', 'ion-egg', '#00a57a');

	// Images
	addIcon('png', 'ion-image', '#dbb1a9');
	addIcon('jpg', 'ion-image', '#dedfa3');
	addAlias('jpeg', 'jpg');
	addIcon('tiff', 'ion-image', '#ff4000');
	addIcon('ico', 'ion-image', '#b6d2d1');
	addIcon('svg', 'ion-image', '#c0c5eb');

	addIcon('gif', 'ion-images', '#aaecc0');

	// Videos
	addIcon('mp4', 'ion-ios-videocam', '#008d00');
	addAlias('webm', 'mp4');
	addAlias('ogg', 'mp4');

	// Audio
	addIcon('mp3', 'ion-volume-medium', '#921100');
	addAlias('wav', 'mp3');

	// Fonts
	addIcon('ttf', 'ion-social-tumblr', '#b42950');
	addIcon('eot', 'ion-social-tumblr', '#b36908');
	addIcon('woff', 'ion-social-tumblr', '#7f4bb2');
	addIcon('woff2', 'ion-social-tumblr', '#7f4bb2');
	addIcon('otf', 'ion-social-tumblr', '#7f4bb2');

	// Readme
	addIcon('md', 'ion-social-markdown', '#b94700', 12);
	addAlias('markdown', 'md');

	// Git
	addIcon('gitignore', 'ion-minus-circled', '#cd5439', 14);
	addIcon('gitmodules', 'ion-fork-repo', '#f64d27', 17);

	// Webservers
	addIcon('htaccess', 'ion-ios-unlocked', '#93a8be', 18);
	addIcon('htpasswd', 'ion-ios-locked', '#6c369c', 18);
	addIcon('conf', 'ion-ios-gear', '#009900');

	// Archive
	addIcon('zip', 'ion-briefcase', '#008858');
	addIcon('rar', 'ion-briefcase', '#005888');
	addIcon('7z', 'ion-briefcase', '#880058');
	addIcon('tgz', 'ion-briefcase', '#7900bc');
	addIcon('tar', 'ion-briefcase', '#885800');
	addIcon('gz', 'ion-briefcase', '#588800');
	addIcon('bzip', 'ion-briefcase', '#884300');
	addIcon('msi', 'ion-briefcase', '#6f8696');
	addIcon('dmg', 'ion-briefcase', '#6f8696');

	// Settings
	addIcon('project', 'ion-ios-gear', '#777777');
	addAlias('jscsrc', 'project');
	addAlias('jshintrc', 'project');
	addAlias('csslintrc', 'project');
	addAlias('htmlhintrc', 'project');
	addAlias('xmlhintrc', 'project');
	addAlias('todo', 'project');
	addAlias('classpath', 'project');
	addAlias('properties', 'project');
	addAlias('bowerrc', 'project');
	addAlias('gruntrc', 'project');
	addAlias('jsrc', 'project');
	addAlias('editorconfig', 'project');

	// Other text files
	addIcon('txt', 'ion-document-text', '#4192c1');
	addIcon('log', 'ion-clipboard', '#225dc9');
	addIcon('npmignore', 'ion-minus-circled', '#cb3837', 14);
	addIcon('slugignore', 'ion-minus-circled', '#0da064', 14);
	addIcon('yml', 'ion-navicon', '#008000');
	addAlias('yaml', 'yml');
	addIcon('sqf', 'ion-wand', '#b9e11f');
	addAlias('map', 'json');

	// LaTeX
	addIcon('tex', 'ion-document-text', '#262686');
	addAlias('bib', 'tex');
	addAlias('sty', 'tex');

	//Singular Types
	addIcon('applescript', 'ion-social-apple', '#afafaf');
	addIcon('textile', 'ion-quote', '#6f8696');
	addIcon('matlab', 'ion-clipboard', '#014495');
	addIcon('lisp', 'ion-ios-paperplane', '#f8c63d');
	addIcon('xsl', 'ion-code', '#68217a');
	addIcon('tcl', 'ion-code', '#c3b15f');
	addIcon('rst', 'ion-ios-paper', '#6f8696');
	addIcon('d', 'ion-contrast', '#960000');
	addIcon('r', 'ion-ios-analytics', '#8495C0');

	var ExtensionUtils = brackets.getModule('utils/ExtensionUtils');

	var FileTreeView = brackets.getModule('project/FileTreeView');
	var WorkingSetView = brackets.getModule('project/WorkingSetView');

	// Before Brackets 1.1.0, icons had a hack that the margin was set to -10000px, which was corrected by the padding.
	// This was removed in Brackets 1.1.0
	var version = /([0-9]+)\.([0-9]+)\.([0-9]+)/.exec(brackets.metadata.version);
	if ((version[1] === '0') || (version[1] === '1' && version[2] === '0')) { // version[1] is major, version[2] is minor
		$('body').addClass('icons-margin-correction');
	}

	ExtensionUtils.loadStyleSheet(module, 'styles/style.css');
	ExtensionUtils.loadStyleSheet(module, 'styles/ionicons.min.css');
	ExtensionUtils.loadStyleSheet(module, "styles/font-awesome.min.css");
	ExtensionUtils.loadStyleSheet(module, "styles/devicons.min.css");

	loadPrefs();

	var provider = function (entry) {
		if (!entry.isFile) {
			return;
		}

		var ext = entry.name;
		var lastIndex = ext.lastIndexOf('.');
		if (lastIndex >= 0) {
			ext = ext.substr(lastIndex + 1);
		} else {
			ext = '';
		}

		var icon = defaultIcons[ext];

		if (userIcons.hasOwnProperty(ext)) {
			var userPrefs = userIcons[ext];
			if (icon) {
				for (var option in userPrefs) {
					icon[option] = (userPrefs.hasOwnProperty(option) ? userPrefs[option] : icon[option]);
				}
			} else {
				icon = userPrefs;
			}
		}

		var data = icon ? icon : getDefaultIcon(ext);

		var $new = $('<ins>');
		$new.addClass(data.icon);
		$new.addClass('file-icon file-tree-view-icon');
		$new.css({
			color: data.color,
			fontSize: (data.size || 16) + 'px'
		});
		return $new;
	};

	WorkingSetView.addIconProvider(provider);
	FileTreeView.addIconProvider(provider);

	prefs.on("change", function (e, data) {
		loadPrefs();
		//		var currentIcons = $('.file-tree-view-icon');
		//		currentIcons.remove();
		//		console.log(currentIcons);
		//		WorkingSetView.addIconProvider(provider);
		//		FileTreeView.addIconProvider(provider);
	});
});