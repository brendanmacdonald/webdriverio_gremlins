const config = require('../../wdio.conf.js').config;
const utils = require('../utils');

describe('When Monkey testing with gremlins', () => {
    it('lets test a challending DOM', () => {
        browser.url('our-work');

        // Load gremlins script into HTML <head> tag
        browser.executeAsync(utils.loadScript, config.gremlinScript);

        // Start the monkey test
        browser.executeAsync(unleashGremlins, 10000); // The duration must be lower than the mocha timeout.
    });
});

function unleashGremlins(duration, callback) {
    function stop() {
        this.stop();
        callback();
    }

    gremlins.createHorde()
        .seed(1234)
        .before(() => {
            setTimeout(stop, duration)
        })
        .after(() => {
            callback;
        })
         .gremlin(gremlins.species.scroller()) // scrolls the viewport to reveal another part of the document
        .mogwai(gremlins.mogwais.gizmo().maxErrors(1))
        .unleash();
}