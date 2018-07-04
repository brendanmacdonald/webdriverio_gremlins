module.exports = {
    gremlinScript: 'https://rawgit.com/marmelab/gremlins.js/master/gremlins.min.js',
    loadScript: (source, done) => {
        let head = document.getElementsByTagName('head')[0];
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = done;
        script.src = source;
        head.appendChild(script);
    }
}