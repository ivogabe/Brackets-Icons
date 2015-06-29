/// <reference path="definitions.d.ts" />
declare var brackets: any, $: any;

import * as module from 'module';
import { getIconSet } from './icon';
import { findInDictionary } from './dictionary';
import { IconDictionary } from './icon-dictionary';

const icons = new IconDictionary();

const PreferencesManager = brackets.getModule('preferences/PreferencesManager');
const prefs = PreferencesManager.getExtensionPrefs('brackets-icons');
prefs.definePreference('icons', 'object', {});
prefs.definePreference('iconset', 'string', 'ionicons');

function loadPreferences() {
	icons.user.settings = prefs.get('icons');
	icons.iconSet = getIconSet(prefs.get('iconset'));
}

const ExtensionUtils = brackets.getModule('utils/ExtensionUtils');

const FileTreeView = brackets.getModule('project/FileTreeView');
const WorkingSetView = brackets.getModule('project/WorkingSetView');
const ProjectManager = brackets.getModule('project/ProjectManager');

// Before Brackets 1.1.0, icons had a hack that the margin was set to -10000px, which was corrected by the padding.
// This was removed in Brackets 1.1.0
const version = /([0-9]+)\.([0-9]+)\.([0-9]+)/.exec(brackets.metadata.version);
if ((version[1] === '0') || (version[1] === '1' && version[2] === '0')) { // version[1] is major, version[2] is minor
	$('body').addClass('icons-margin-correction');
}

ExtensionUtils.loadStyleSheet(module, '../styles/style.css');
ExtensionUtils.loadStyleSheet(module, '../styles/ionicons.min.css');
ExtensionUtils.loadStyleSheet(module, '../styles/font-awesome.min.css');
ExtensionUtils.loadStyleSheet(module, '../styles/devicons.min.css');

loadPreferences();

const provider = (entry) => {
	if (!entry.isFile) {
		return;
	}

	const data = findInDictionary(icons, entry.name);
	const mainIcon = data[data.length - 1];
	const secondIcon = data[data.length - 2];

	const $icon = $('<ins>');
	$icon.addClass('file-icon-box')

	const $main = $('<div>');
	$main.addClass(mainIcon.icon);
	$main.addClass('file-icon file-icon-main file-tree-view-icon');
	$main.css({
		color: mainIcon.color,
		fontSize: (mainIcon.size || 16) + 'px'
	});
	$icon.append($main);
	if (secondIcon !== undefined) {
		const $second = $('<div>');
		$second.addClass(secondIcon.icon);
		$second.addClass('file-icon file-icon-secondary file-tree-view-icon');
		$second.css({
			color: secondIcon.color,
			fontSize: (secondIcon.size || 16) * 3 / 4 + 'px'
		});
		$icon.append($second);
	}
	return $icon;
};

WorkingSetView.addIconProvider(provider);
FileTreeView.addIconProvider(provider);

prefs.on('change', () => {
	loadPreferences();
	ProjectManager.rerenderTree();
	WorkingSetView.refresh(true);
});
