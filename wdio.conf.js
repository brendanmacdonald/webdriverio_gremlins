exports.config = {
    specs: [
        __dirname + '/test/tests/**', 
    ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        chromeOptions: {
            forceDevToolsScreenshot: true,
            args: [ '--auto-open-devtools-for-tabs', 'start-maximized']//, '--enable-logging', '--v=1']
        }
    }],
    sync: true,
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    baseUrl: 'https://www.scottlogic.com/',
    services: ['chromedriver'],
    port: 9515,
    path: '/',
    framework: 'mocha',
    reporters: ['dot'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },
    gremlinScript: 'https://rawgit.com/marmelab/gremlins.js/master/gremlins.min.js'
}