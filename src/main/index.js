import { app, BrowserWindow, Tray } from 'electron' // eslint-disable-line

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\') // eslint-disable-line
}

let mainWindow;
let tray;

const winURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:9080'
  : `file://${__dirname}/index.html`;

function createTray() {
  const menuIcon = process.platform === 'darwin' ? `${__static}/ic-write.png` : `${__static}/ic-book.png`;
  tray = new Tray(menuIcon);
  tray.on('click', () => {
    if (mainWindow) {
      mainWindow.hide();
    }
  });
}

function createWindow() {
  if (process.platform !== 'darwin' && process.platform !== 'win32') {
    return;
  }
  /**
   * Initial window options
   */
  const options = {
    width: 1024,
    height: 640,
    useContentSize: true,
    show: true, // 创建后是否显示
    frame: true, // 是否创建子 frameless 窗口
    fullscreenable: true, // 是否允许全屏
    center: true, // 是否出现在屏幕居中位置
    backgroundColor: '#333333',
    titleBarStyle: 'hidden', // 标题栏样式 hidden、hiddenInset、customButtonsOnHover
    resizable: false, // 是否允许拉伸大小
    transparent: false, // 是否是透明窗口
    vibrancy: 'ultra-dark', // 窗口模糊的样式（仅macOS）
    webPreferences: {
      backgroundThrottling: false, // 当页面被置于非激活状态时是否停止动画和计时器
    },
  };
  if (process.platform === 'win32') {
    options.show = true;
    options.frame = false;
    options.backgroundColor = '#3g33c37';
  }

  mainWindow = new BrowserWindow(options);

  mainWindow.loadURL(winURL);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', () => {
  createWindow();
  createTray();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
