import {app, BrowserWindow, ipcMain, Menu, Tray} from 'electron'
import path from 'path'

let ApplicationMenuConf = [
    {
        label: '菜单',
        submenu: [{
            label: '最小化',
            accelerator: 'CmdOrCtrl+M',
            role: 'minimize'
        }, {
            label: '关闭',
            accelerator: 'CmdOrCtrl+W',
            role: 'close'
        }, {
            type: 'separator'
        }, {
            label: '重新打开窗口',
            accelerator: 'CmdOrCtrl+Shift+T',
            enabled: false,
            key: 'reopenMenuItem',
            click: function () {
                app.emit('activate')
            }
        }]
    },
]

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
    global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow, tray
const winURL = process.env.NODE_ENV === 'development'
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`

function createWindow() {
    /**
     * Initial window options
     */
    mainWindow = new BrowserWindow({
        show: false,
        height: 600,
        width: 1000,
        backgroundColor: '#333333',
        useContentSize: true,
        resizable: false,
        center: true,
        titleBarStyle: 'hidden',
        frame: false,
        transparent: true,
        nodeIntegration: true,
    })

    mainWindow.loadURL(winURL)
    global.mainId = mainWindow.id;

    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
    });
    mainWindow.on('close', event => {
        mainWindow.hide();
        mainWindow.setSkipTaskbar(true);
        event.preventDefault();
    });
    mainWindow.on('closed', () => {
        mainWindow = null
    })
    mainWindow.on('blur', () => {
        mainWindow.webContents.send('window-focus', false);
    });
    mainWindow.on('focus', () => {
        mainWindow.webContents.send('window-focus', true);
    });

    let menu = Menu.buildFromTemplate(ApplicationMenuConf)
    Menu.setApplicationMenu(menu)

    tray = new Tray(path.join(__static, 'icon.ico'))
    const contextMenu = Menu.buildFromTemplate([
        {
            label: '退出', click: () => {
                mainWindow.destroy();
                app.quit();
            }
        },
    ])
    tray.setToolTip('EPD')
    tray.setContextMenu(contextMenu)
    tray.on('double-click', () => {
        if (!mainWindow.isVisible()) {
            mainWindow.show();
            mainWindow.setSkipTaskbar(false);
        } else {
            if (mainWindow.isMinimized()) mainWindow.restore();
        }
    })
}

app.setLoginItemSettings({
    openAtLogin: false,
    openAsHidden: false,
    path: process.execPath,
    args: [
        '--processStart', `"${process.execPath}"`,
    ]
});

app.on('ready', () => {
    createWindow();
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
});

ipcMain.on('window-minimize', () => mainWindow.minimize());
ipcMain.on('window-maximize', () => {
    if (mainWindow.isMaximized()) {
        mainWindow.unmaximize()
    } else {
        mainWindow.maximize()
    }
});
ipcMain.on('window-close', e => mainWindow.close());

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
