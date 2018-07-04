exports.config = {
    specs: [
        __dirname + '/tests/**'
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        chromeOptions: {
            forceDevToolsScreenshot: true,
            args: ['--disable-gpu', '--auto-open-devtools-for-tabs', 'start-maximized', '--enable-logging', '--v=1', '--log-path=chromedriver.log']
        }
    }],
    sync: true,
    logLevel: 'verbose',
    logOutput: './logs',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'https://the-internet.herokuapp.com/',
    services: ['chromedriver'],
    port: 9515,
    path: '/',
    chromeDriverLogs: './logs',
    framework: 'mocha',
    reporters: ['dot'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    }
}