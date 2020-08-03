import {app, BrowserWindow, dialog, ipcMain, Menu, Tray} from 'electron'
import path from 'path'

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

if (process.env.NODE_ENV !== 'development') {
    global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow, tray
const winURL = process.env.NODE_ENV === 'development'
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`

function createWindow() {
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
        webPreferences: {
            nodeIntegration: true
        }
    })

    mainWindow.loadURL(winURL)

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

    tray = new Tray(path.join(__static, 'icon.ico'))
    const trayContextMenu = Menu.buildFromTemplate([
        {
            label: '显示窗口',
            click: () => {
                mainWindow.show();
                mainWindow.restore();
            }
        },
        {
            type: 'separator'
        },
        {
            label: '退出程序',
            click: () => {
                mainWindow.show();
                mainWindow.restore();
                dialog.showMessageBox(mainWindow, {
                    type: 'question',
                    title: '退出程序',
                    message: '确定要退出永恒的进程守护吗？',
                    detail: '这将使您列表中的进程不再受到监控和保护，其异常停止后将不会被自动启动。',
                    buttons: ['取消', '退出'],
                    defaultId: 1,
                    noLink: true,
                }).then(r => {
                    if (r.response === 1) {
                        mainWindow.destroy();
                        app.quit();
                    }
                });
            }
        },
    ])
    tray.setToolTip('永恒进程守护')
    tray.setContextMenu(trayContextMenu)
    tray.on('double-click', () => {
        if (!mainWindow.isVisible()) {
            mainWindow.show();
            mainWindow.setSkipTaskbar(false);
        } else {
            if (mainWindow.isMinimized()) mainWindow.restore();
        }
    })
}

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
ipcMain.on('window-restore', () => mainWindow.restore());
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
