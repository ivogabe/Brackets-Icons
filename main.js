define(function(require, exports, module) {
	var fileInfo = {};

	function addIcon(extension, icon, color, size) {
		fileInfo[extension] = {
			icon: icon,
			color: color,
			size: size
		};
	}
	function addAlias(extension, other) {
		fileInfo[extension] = fileInfo[other];
	}
	function getDefaultIcon(extension) {
		if (extension === '') {
			return {
				color: '#fff',
				icon: '\uf12f'
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
			icon: '\uf12f'
		};
	}

	// XML
	addIcon('xml',    '\uf271', '#ff6600');
	addIcon('html',   '\uf271', '#E34C26');
	addAlias('htm', 'html');

	// Stylesheets
	addIcon('css',    '\uf219', '#0270b9', 12);
	addIcon('scss',   '\uf219', '#CB6899', 12);
	addAlias('sass',  'scss');
	addIcon('less',   '\uf219', '#2b5086', 12);
	addIcon('styl',   '\uf219', '#b3d107', 12);

	// JavaScript
	addIcon('js',     '\uf2db', '#e5a228', 12);
	addIcon('ts',     '\uf2db', '#0074c1', 12);
	addIcon('coffee', '\uf272', '#425d99');
	addIcon('json',   '\uf195', '#e5a228');
	addIcon('ls',     '\uf269', '#369bd7');

	// Server side
	addIcon('php',    '\uf270', '#6976c3');
	addIcon('sql',    '\uf2fe', '#c67f07');

	// Java
	addIcon('java',   '\uf272', '#5382A1');
	addAlias('class', 'java');

	// Ruby
	addIcon('rb',     '\uf199', '#9b111e');
	addAlias('erb',   'rb');
	addAlias('rdoc',  'rb');
	addIcon('feature','\uf11a', '#4e8b39');
    
    // Python
    addIcon('py',     '\uf1fe', '#f8c63d');

	// Shell and friends
	addIcon('sh',     '\uf12e', '#008d00');
	addIcon('bat',    '\uf247', '#60c910');

	// Templating
	addIcon('jade',   '\uf277', '#00a57a');

	// Images
	addIcon('png',    '\uf147', '#dbb1a9');
	addIcon('jpg',    '\uf147', '#dedfa3');
	addAlias('jpeg',  'jpg');
	addIcon('tiff',   '\uf147', '#ff4000');
	addIcon('ico',    '\uf147', '#b6d2d1');
	addIcon('svg',    '\uf147', '#c0c5eb');

	addIcon('gif',    '\uf148', '#aaecc0');

	// Videos
	addIcon('mp4',    '\uf1f3', '#008d00');
	addAlias('webm',  'mp4');
	addAlias('ogg',   'mp4');

	// Audio
	addIcon('mp3',    '\uf259', '#921100');
	addAlias('wav',   'mp3');

	// Fonts
	addIcon('ttf',    '\uf241', '#b42950');
	addIcon('eot',    '\uf241', '#b36908');
	addIcon('woff',    '\uf241', '#7f4bb2');

	// Readme
	addIcon('md',     /*'\uf12e'*/ '\uf2d0', '#b94700', 12);
	addAlias('markdown', 'md');

	// Git
	addIcon('gitignore', '\uf207', '#cd5439', 14);
	addIcon('gitmodules', '\uf2c0', '#f64d27', 17);

	// Webservers
	addIcon('htaccess', '\uf1f0', '#93a8be', 18);
	addIcon('htpasswd', '\uf1a8', '#6c369c', 18);
	addIcon('conf',   '\uf195', '#009900');

	// Archive
	addIcon('zip',    '\uf283', '#008858');
	addIcon('rar',    '\uf283', '#005888');
	addIcon('7z',     '\uf283', '#880058');
	addIcon('tgz',    '\uf283', '#7900bc');
	addIcon('tar',    '\uf283', '#885800');
	addIcon('gz',     '\uf283', '#588800');
	addIcon('bzip',   '\uf283', '#884300');

	// Settings
	addIcon('project', '\uf195', '#777777');
	addAlias('jscsrc', 'project');
	addAlias('jshintrc', 'project');
	addAlias('csslintrc', 'project');
	addAlias('todo', 'project');
	addAlias('classpath', 'project');

	// Other text files
	addIcon('txt',    '\uf12e', '#4192c1');
	addIcon('log',    '\uf2e6', '#225dc9');
	addIcon('npmignore', '\uf207', '#cb3837', 14);
	addIcon('yml',   '\uf20e', '#008000');

	var ExtensionUtils = brackets.getModule("utils/ExtensionUtils");

	var FileTreeView = brackets.getModule("project/FileTreeView");
	var WorkingSetView = brackets.getModule('project/WorkingSetView');
    
    // Before Brackets 1.1.0, icons had a hack that the margin was set to -10000px, which was corrected by the padding.
    // This was removed in Brackets 1.1.0
    var version = /([0-9]+)\.([0-9]+)\.([0-9]+)/.exec(brackets.metadata.version);
    if ((version[1] === "0") || (version[1] === "1" && version[2] === "0")) { // version[1] is major, version[2] is minor
        $('body').addClass('icons-margin-correction');
    }

	ExtensionUtils.loadStyleSheet(module, "styles/style.css");
	
	var provider = function(entry) {
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
		
		var data = fileInfo.hasOwnProperty(ext) ? fileInfo[ext] : getDefaultIcon(ext);

		var $new = $('<ins>');
		$new.text(data.icon);
		$new.addClass('file-icon file-tree-view-icon');
		$new.css({
			color: data.color,
			fontSize: (data.size || 16) + 'px'
		});
		return $new;
	};
	
	FileTreeView.addIconProvider(provider);
	WorkingSetView.addIconProvider(provider);
});
