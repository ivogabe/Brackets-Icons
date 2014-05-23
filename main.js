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
	addIcon('svg',    '\uf271', '#ff9900');

	// Stylesheets
	addIcon('css',    '\uf219', '#0270b9', 12);
	addIcon('scss',   '\uf219', '#c6538c', 12);
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

	// Java
	addIcon('java',   '\uf272', '#5382A1');
	addAlias('class', 'java');

	// Shell
	addIcon('sh',     '\uf12e', '#008d00');

	// Images
	addIcon('png',    '\uf147', '#ff4000');
	addAlias('jpg',   'png');
	addAlias('jpeg',  'png');
	addAlias('tiff',  'png');
	addAlias('ico',   'png');
	addIcon('gif',    '\uf148', '#ff4000');

	// Videos
	addIcon('mp4',    '\uf1f3', '#008d00');
	addAlias('webm',  'mp4');
	addAlias('ogg',   'mp4');

	// Audio
	addIcon('mp3',    '\uf259', '#921100');
	addAlias('wav',   'mp3');

	// Readme
	addIcon('md',     /*'\uf12e'*/ '\uf2d0', '#b94700', 12);

	var ProjectManager = brackets.getModule('project/ProjectManager');
	var DocumentManager = brackets.getModule('document/DocumentManager');
	var ExtensionUtils = brackets.getModule("utils/ExtensionUtils");

	ExtensionUtils.loadStyleSheet(module, "styles/style.css");

	function renderFiles() {
		$('#project-files-container ul').removeClass('jstree-no-icons').addClass('jstree-icons');

		var $items = $('#project-files-container li>a');

		$items.each(function(index) {
			var ext = ($(this).find('.extension').text() || '').substr(1);

			var data;

			if ($(this).parent().hasClass('jstree-leaf')) {
				data = fileInfo.hasOwnProperty(ext) ? fileInfo[ext] : getDefaultIcon(ext);
			} else {
				return;
			}

			var $new = $(this).find('.jstree-icon');
			$new.text(data.icon);
			$new.addClass('file-icon');
			$new.css({
				color: data.color,
				fontSize: (data.size || 16) + 'px'
			});
		});
	}
	function renderWorkingSet() {
		$('#open-files-container li>a>.file-icon').remove();

		var $items = $('#open-files-container li>a');

		$items.each(function(index) {
			var ext = ($(this).find('.extension').text() || '').substr(1);

			var data = fileInfo.hasOwnProperty(ext) ? fileInfo[ext] : getDefaultIcon(ext);

			var $new = $('<div>');
			$new.text(data.icon);
			$new.addClass('file-icon');
			$new.css({
				color: data.color,
				fontSize: (data.size || 16) + 'px'
			});
			$(this).prepend($new);
		});
	}

	$(ProjectManager).on('projectOpen projectRefresh', function() {
		var events = 'load_node.jstree create_node.jstree set_text.jstree';

		renderFiles();

		$('#project-files-container').off(events, renderFiles);
		$('#project-files-container').on(events, renderFiles);
	});

	$(DocumentManager).on("workingSetAdd workingSetAddList workingSetRemove workingSetRemoveList fileNameChange pathDeleted workingSetSort", function() {
		renderWorkingSet();
	});
});
