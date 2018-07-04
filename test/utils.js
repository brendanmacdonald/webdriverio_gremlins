module.exports = {
        loadScript: (source, done) => {
        let head = document.getElementsByTagName('head')[0];
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = done;
        script.src = source;
        head.appendChild(script);
    }
}