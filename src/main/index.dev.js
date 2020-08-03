/**
 * This file is used specifically and only for development. It installs
 * `electron-debug` & `vue-devtools`. There shouldn't be any need to
 *  modify this file, but it can be used to extend your development
 *  environment.
 */

/* eslint-disable */

// Install `electron-debug` with `devtron`
require('electron-debug')({showDevTools: false})

// Install `vue-devtools`
require('electron').app.on('ready', () => {
    let installExtension = require('electron-devtools-installer')
    installExtension.default(installExtension.VUEJS_DEVTOOLS)
        .then(() => {
        })
        .catch(err => {
            console.log('Unable to install `vue-devtools`: \n', err)
        })
})

// let forever = require('forever-monitor');
// let child = forever.start(["TakeColor.exe"], {
//     uid: 'cb48d398-8dd3-4d3d-ba5a-f3a02ba4daf8',
//     max: undefined,
//     silent: false,
//     cwd: 'G:\\软件',
//     minUptime: 1000,
//     spinSleepTime: 2000,
//     pidFile: './pid'
// });
//
// child.on('restart', function () {
//     console.error('Forever restarting script for ' + child.times + ' time');
// });
//
// child.on('exit:code', function (code) {
//     console.error('Forever detected ' + child.uid + ' exited with code ' + code);
// });

// Require `main` process to boot app
require('./index')