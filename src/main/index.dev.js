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

// let forever = require('forever')
//
// let inst = forever.start(["GifCam"], {
//     silent: true,
//     spinSleepTime: 2000,
//     uid: 'cb48d398-8dd3-4d3d-ba5a-f3a02ba4daf8',
//     max: undefined,
//     cwd: 'G:\\软件\\GifCam',
//     minUptime: 1000,
// })
//
// forever.startServer([inst], (v) => {
//     console.log('server: ' + v)
// })
//
// setInterval(function () {
//     forever.list(true, (data) => {
//         console.log(data)
//     })
// }, 2000)

// let forever = require('forever-monitor');
// let child = forever.start(["GifCam"], {
//     silent: true,
//     spinSleepTime: 2000,
//     uid: 'cb48d398-8dd3-4d3d-ba5a-f3a02ba4daf8',
//     max: undefined,
//     cwd: 'G:\\软件\\GifCam',
//     minUptime: 1000,
// });

// let child = forever.start(["mstsc.exe"], {
//     uid: 'cb48d398-8dd3-4d3d-ba5a-f3a02ba4daf8',
//     max: undefined,
//     silent: false,
//     cwd: 'C:\\Windows\\System32',
//     minUptime: 1000,
//     spinSleepTime: 2000,
// });

// child.on('restart', function () {
//     console.error('Restarting ' + child.uid + ' for ' + child.times + ' time');
// });
//
// child.on('exit:code', function (code) {
//     console.error('Detected ' + child.uid + ' exited with code ' + code);
// });

// Require `main` process to boot app
require('./index')