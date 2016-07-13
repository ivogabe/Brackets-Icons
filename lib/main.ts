/// <reference path="definitions.d.ts" />
declare var brackets: any, $: any;

import * as module from 'module';
import { getIconSet, IconSet, Icon } from './icon';
import { findInDictionary } from './dictionary';
import { IconDictionary } from './icon-dictionary';

const icons = new IconDictionary();

const PreferencesManager = brackets.getModule('preferences/PreferencesManager');
const prefs = PreferencesManager.getExtensionPrefs('brackets-icons');
prefs.definePreference('icons', 'object', {});
prefs.definePreference('iconset', 'string', 'ionicons');
prefs.definePreference('secondary', 'boolean', true);
prefs.definePreference('foldericons', 'boolean', false);

// Change iconset menu options
const CommandManager = brackets.getModule('command/CommandManager');
const Menus = brackets.getModule('command/Menus');
const commandThemeSecondary = 'icons.show-secondary';
const commandThemeFolderIcons = 'icons.show-folder-icons';
const commandThemeIonId = 'icons.iconset-ionicons';
const commandThemeDevId = 'icons.iconset-devicons';
const commandSecondary = CommandManager.register('Show secondary icons', commandThemeSecondary, () => { prefs.set('secondary', !icons.secondary); });
const commandFolderIcons = CommandManager.register('Show folder icons', commandThemeFolderIcons, () => { prefs.set('foldericons', !icons.foldericons); });
const commandThemeIon = CommandManager.register('Ionicons', commandThemeIonId, () => { prefs.set('iconset', 'ionicons'); });
const commandThemeDev = CommandManager.register('Devicons', commandThemeDevId, () => { prefs.set('iconset', 'devicons'); });
const menuView = Menus.getMenu(Menus.AppMenuBar.VIEW_MENU);
menuView.addMenuDivider();
menuView.addMenuItem(commandSecondary);
menuView.addMenuItem(commandFolderIcons);
menuView.addMenuItem(commandThemeIonId);
menuView.addMenuItem(commandThemeDevId);

function loadPreferences() {
	icons.user.settings = prefs.get('icons');
	icons.iconSet = getIconSet(prefs.get('iconset'));
	icons.secondary = prefs.get('secondary');
	icons.foldericons = prefs.get('foldericons');
	commandSecondary.setChecked(icons.secondary);
	commandFolderIcons.setChecked(icons.foldericons);
	commandThemeIon.setChecked(icons.iconSet === IconSet.IconIon);
	commandThemeDev.setChecked(icons.iconSet === IconSet.IconDev);
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

const createIcon = (data: Icon, secondary: boolean) => {
	const type = secondary ? 'secondary' : 'main';
	const size = secondary ? 0.75 : 1;
	const $icon = $('<div>');
	$icon.addClass(data.icon);
	$icon.addClass('file-icon file-tree-view-icon file-icon-' + type);
	$icon.css({
		color: data.color,
		fontSize: (data.size || 16) * size + 'px'
	});
	return $icon;
};

const provider = (entry) => {
	let data;
	if (!entry.isFile) {
		if (!icons.foldericons) {
			return;
		} 
		else {
			data = [{
				color: "#666",
				icon: "ion-android-folder",
				size: 15
			}];
		}
	else {
		data = findInDictionary(icons, entry.name, icons.secondary, (a, b) => {
			if (a === b) return true;
			if (a === undefined || b === undefined) return false;
			return a.color === b.color && a.icon === b.icon && a.size === b.size;
		});
	}
	
	const $icon = $('<ins>');
	$icon.addClass('file-icon-box')
	
	$icon.append(createIcon(data[0], false));
	if (data[1] !== undefined) $icon.append(createIcon(data[1], true));
	
	return $icon;
};

WorkingSetView.addIconProvider(provider);
FileTreeView.addIconProvider(provider);

prefs.on('change', () => {
	loadPreferences();
	$('.jstree-open>a, .jstree-closed>a').css('margin-left', icons.foldericons ? '13px' : '0');
	ProjectManager.rerenderTree();
	WorkingSetView.refresh(true);
});
