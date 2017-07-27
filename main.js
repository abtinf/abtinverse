const {app, BrowserWindow, Menu} = require('electron');
const baseURL = 'https://mail.notes.na.collabserv.com/';
const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.35 Safari/537.36';
const initialWidth = 1280, initialHeight = 720;

function createWindow() {
	win = new BrowserWindow({
		width: initialWidth, height: initialHeight,
		//Site gets stuck loading without setting nodeIntegration
		//https://github.com/electron/electron/issues/7047
		webPreferences: { nodeIntegration: false }
	});
	win.loadURL(baseURL,
		{userAgent: userAgent});
	win.on('closed', () => {
		win = null;
	});
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
	app.quit();
});
