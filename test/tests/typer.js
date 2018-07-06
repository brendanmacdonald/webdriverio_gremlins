const config = require('../../wdio.conf.js').config;
const utils = require('../utils');

describe('When Monkey testing with gremlins', () => {
  
    it('lets test for typing errors', () => {
        browser.url('what-we-do').log('browser');

        // Load gremlins script into HTML <head> tag
        browser.executeAsync(utils.loadScript, config.gremlinScript);

        // Unleash the gremlins
        const browserLogs = browser.executeAsync(unleashGremlins, 10000).log('browser'); // The duration must be lower than the mocha timeout.

        // Process the results
        utils.createReport(browserLogs)
    });
});

function unleashGremlins(duration, callback) {
    function stop() {
        this.stop();
        callback();
    }

    const logger = {
        log: function (msg) {
            console.log('LOG message - ' + msg);
        },
        info: function (msg) {
            console.log('INFO message - ' + msg)
        },
        warn: function (msg) {
            console.log('WARN message - ' + msg);
        },
        error: function (msg) {
            console.log('ERROR message - ' + msg);
        }
    };

    gremlins.createHorde()
        .before(() => {
            setTimeout(stop, duration)
        })

        .after(() => {
            callback;
        })

        .seed(1234)
        .logger(logger)
        .gremlin(gremlins.species.typer()) // types keys on the keyboard
        .mogwai(gremlins.mogwais.gizmo().maxErrors(1))
        .unleash();


}