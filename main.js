const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

// ---- Manually tune the startup position here ----
// These are pixel coordinates measured from the top-left corner of your screen.
// Increase X to move the window right, increase Y to move it down.
const STARTUP_X = 1252;
const STARTUP_Y = 80;

function createWindow() {
  const windowWidth = 205;
  const windowHeight = 483;

  mainWindow = new BrowserWindow({
    width: windowWidth,
    height: windowHeight,
    x: STARTUP_X,
    y: STARTUP_Y,
    resizable: false,
    maximizable: false,
    alwaysOnTop: true,
    opacity: 0.5,
    backgroundColor: '#45433f',
    icon: path.join(__dirname, 'icon.ico'),
    title: 'Tibia Timers',
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#00000000',
      symbolColor: '#e9e5da',
      height: 30,
    },
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// --- IPC handlers for the renderer's controls ---
ipcMain.on('set-always-on-top', (event, shouldPin) => {
  if (mainWindow) mainWindow.setAlwaysOnTop(shouldPin);
});

ipcMain.on('set-opacity', (event, opacityValue) => {
  if (mainWindow) mainWindow.setOpacity(opacityValue);
});
