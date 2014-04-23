define(function(require, exports, module) {
	var fileInfo = {
		html: {
			color: '#E34C26',
			icon: '\uf271'
		},
		svg: {
			color: '#ff9900',
			icon: '\uf271'
		},
		xml: {
			color: '#ff6600',
			icon: '\uf271'
		},

		css: {
			color: '#0270b9',
			icon: '\uf219',
			size: 12
		},

		js: {
			color: '#e5a228',
			icon: '\uf2db',
			size: 12
		},
		ts: {
			color: '#0074c1',
			icon: '\uf2db',
			size: 12
		},
		coffee: {
			color: '#28334b',
			icon: '\uf272'
		},

		json: {
			color: '#e5a228',
			icon: '\uf195'
		},

		sh: {
			color: '#008d00',
			icon: '\uf12e'
		},

		// images
		png: {
			color: '#ff4000',
			icon: '\uf147'
		},
		jpg: {
			color: '#ff4000',
			icon: '\uf147'
		},
		jpeg: {
			color: '#ff4000',
			icon: '\uf147'
		},
		tiff: {
			color: '#ff4000',
			icon: '\uf147'
		},
		gif: {
			color: '#ff4000',
			icon: '\uf148'
		},

		// videos
		mp4: {
			color: '#008d00',
			icon: '\f1f3'
		},
		webm: {
			color: '#008d00',
			icon: '\f1f3'
		},
		ogg: {
			color: '#008d00',
			icon: '\f1f3'
		},

		// audio
		mp3: {
			color: '#921100',
			icon: '\uf259'
		},
		wav: {
			color: '#921100',
			icon: '\uf259'
		}
	};
	var def = {
		color: '#fff',
		icon: '\uf12f'
	};

	var ProjectManager = brackets.getModule('project/ProjectManager');
	var ExtensionUtils = brackets.getModule("utils/ExtensionUtils");

	ExtensionUtils.loadStyleSheet(module, "styles/style.css");

	function renderFiles() {
		$('#project-files-container ul').removeClass('jstree-no-icons').addClass('jstree-icons');

		$items = $('#project-files-container li>a');

		$items.each(function(index) {
			var ext = ($(this).find('.extension').text() || '').substr(1);

			var data;

			if ($(this).parent().hasClass('jstree-leaf')) {
				data = fileInfo[ext] || def;
			} else {
				return;
			}

			$new = $(this).find('.jstree-icon');
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
});
