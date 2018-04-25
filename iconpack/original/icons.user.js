// ==UserScript==
// @id             iitc-plugin-pogo-icon-pack-original
// @name           IITC plugin: pogo for portals (Icon Pack: Original Theme)
// @category       Iconss
// @version        0.1.0
// @updateURL      https://github.com/TiagoDGomes/iitc-plugin-pogo/raw/master/iconpack/original/icons.meta.js
// @downloadURL    https://github.com/TiagoDGomes/iitc-plugin-pogo/raw/master/iconpack/original/icons.user.js
// @description    Icon Pack (Original Theme)
// @include        https://www.ingress.com/intel*
// @include        http://www.ingress.com/intel*
// @match          https://www.ingress.com/intel*
// @match          http://www.ingress.com/intel*
// @include        https://www.ingress.com/mission/*
// @include        http://www.ingress.com/mission/*
// @match          https://www.ingress.com/mission/*
// @match          http://www.ingress.com/mission/*
// @grant          none
// ==/UserScript==

function wrapper(plugin_info) {
    if (typeof window.plugin !== 'function') {
        window.plugin = function () {};
    }
    if (typeof window.plugin.pogo !== 'function') {
        window.plugin.pogo = function () {};
    }
    window.plugin.pogo.iconPack = {}
    window.plugin.pogo.iconPackSelected = 'original';
    window.plugin.pogo.iconPack[window.plugin.pogo.iconPackSelected] = {
        "name": "Original Theme",
        "pokestop": {
            iconUrl: 'data:image/gif;base64,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',
            iconAnchor: [9, 21],
            iconSize: [17, 22]
        },
        "gym": {
            iconUrl: 'data:image/gif;base64,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',
            iconAnchor: [9, 21],
            iconSize: [17, 22]
        }
    };
    setup.info = plugin_info; //add the script info data to the function as a property
    if (!window.bootPlugins) {
        window.bootPlugins = [];
    }
    window.bootPlugins.push(setup);
    // if IITC has already booted, immediately run the 'setup' function
    if (window.iitcLoaded && typeof setup === 'function') {
        setup();
    }
} // wrapper end
// inject code into site context
var script = document.createElement('script');
var info = {};
if (typeof GM_info !== 'undefined' && GM_info && GM_info.script) {
    info.script = {
        version: GM_info.script.version,
        name: GM_info.script.name,
        description: GM_info.script.description
    };
}
script.appendChild(document.createTextNode('(' + wrapper + ')(' + JSON.stringify(info) + ');'));
(document.body || document.head || document.documentElement).appendChild(script);