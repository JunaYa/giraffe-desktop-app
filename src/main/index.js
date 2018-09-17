import { app, BrowserWindow, Tray, Menu } from "electron"; // eslint-disable-line

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, "\\\\"); // eslint-disable-line
}

let mainWindow;

const winURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:9080'
      : `file://${__dirname}/index.html`;

function createTray() {
  const menuIcon =
        process.platform === 'darwin'
          ? `${__static}/ic-write.png`
          : `${__static}/ic-book.png`;
  const tray = new Tray(menuIcon);
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Open Giraffe',
      click() {
        mainWindow.show();
      },
    },
    {
      role: 'quit',
      accelerator: 'CmdOrCtrl+Q',
      label: 'Quit',
    },
  ]);
  tray.on('right-click', () => {
    tray.popUpContextMenu(contextMenu);
  });
}

const createMenu = () => {
  const template = [
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'pasteandmatchstyle' },
        { role: 'delete' },
        { role: 'selectall' },
      ],
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' },
        { type: 'separator' },
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { type: 'separator' },
        { role: 'togglefullscreen' },
      ],
    },
    {
      role: 'window',
      submenu: [
        { role: 'minimize' },
        { role: 'close' },
      ],
    },
    {
      label: 'Mode',
      submenu: [
        {
          label: 'Markdown',
          type: 'radio',
          click() {
          },
        },
        {
          label: 'Normal',
          type: 'radio',
          click() {
          },
        },
      ],
    },
  ];

  if (process.platform === 'darwin') {
    template.unshift({
      label: app.getName(),
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services', submenu: [] },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideothers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' },
      ],
    });

    // Edit menu
    template[1].submenu.push(
      { type: 'separator' },
      {
        label: 'Speech',
        submenu: [
          { role: 'startspeaking' },
          { role: 'stopspeaking' },
        ],
      },
    );

    // Window menu
    template[3].submenu = [
      { role: 'close' },
      { role: 'minimize' },
      { role: 'zoom' },
      { type: 'separator' },
      { role: 'front' },
    ];
  }

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
};

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
    resizable: true, // 是否允许拉伸大小
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
  createMenu();
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
