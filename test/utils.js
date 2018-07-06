const json2html = require('node-json2html');
const fs = require('fs');

module.exports = {
    loadScript: (source, done) => {
        let head = document.getElementsByTagName('head')[0];
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = done;
        script.src = source;
        head.appendChild(script);
    },
    createReport: (logs) => {
        var headertemplate = {
            "tag": "thead",
            "id": "json-head",
            "children": [{
                "tag": "tr",
                "children": [{
                        "tag": "th",
                        "html": "LEVEL"
                    },
                    {
                        "tag": "th",
                        "html": "MESSAGE"
                    },
                    {
                        "tag": "th",
                        "html": "TIMESTAMP"
                    }
                ]
            }]
        }

        var template = {
            "tag": "table",
            "class": "table table-striped table-hover",
            "children": [{
                "tag": "tbody",
                "id": "json-body",
                "children": [{
                    "tag": "tr",
                    "children": [{
                            "tag": "td",
                            "html": "${level}"
                        },
                        {
                            "tag": "td",
                            "html": "${message}"
                        },
                        {
                            "tag": "td",
                            "html": "${timestamp}"
                        }
                    ]
                }]
            }]
        };

        var html = '<html><head><title>Gremlins Example</title><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script></head><body><div class="container">';
        html += json2html.transform(logs, headertemplate);
        html += json2html.transform(logs.value, template);
        html += '</div></body><html>';

        fs.writeFile("report.html", html, (err) => {
            if(err) {
                return console.log(err);
            }
        
            console.log("The report was saved!");
        }); 
    }
}