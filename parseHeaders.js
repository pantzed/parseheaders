'use strict';

/* eslint-env node */
let text = `HTTP/1.0 200 OK
Date: Mon, 30 Jul 2018 14:13:41 GMT
Expires: -1
Cache-Control: private, max-age=0
Content-Type: text/html; charset=ISO-8859-1
P3P: CP="This is not a P3P policy! See g.co/p3phelp for more info."
Server: gws
X-XSS-Protection: 1; mode=block
X-Frame-Options: SAMEORIGIN
Set-Cookie: 1P_JAR=2018-07-30-14; expires=Wed, 29-Aug-2018 14:13:41 GMT; path=/; domain=.google.com
Set-Cookie: NID=135=L-fAEEQ8aLSweVUQhG11theKf4GTPldKLqfDigLVBJz63uIuMqLUx7_-ZjPPr1Ij9bHV8txS2jrJG-onsibYnn7ZjjiqwOWQaV-3CI_aOWStLWoa_Q27FdFdDOvZ1TFz; expires=Tue, 29-Jan-2019 14:13:41 GMT; path=/; domain=.google.com; HttpOnly
Accept-Ranges: none
Vary: Accept-Encoding

<!doctype html><html itemscope="" itemtype="http://schema.org/WebPage" lang="en"><head><meta content="Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for." name="description">
<!-- ALL THE REST OF THE HTML --></div></body></html>`

function parseHeaders(text) {
    let obj = {};
    obj.headers = {};
    obj.body;
    let arr = text.split('\n');
    let lineOneArr = arr[0].split(' ');
    obj.version = lineOneArr[0];
    obj.code = lineOneArr[1];
    arr.shift();
    let keyRegex = /^([\w+\-]+)/g;
    let valueRegex = /\ (.*)$/g;
    while (arr.length > 0) {
        if (arr[0].length === 0){
            break;
        } 
        else {
            let key = arr[0].match(keyRegex)[0];
            let value = arr[0].match(valueRegex)[0].trim();
            obj.headers[key] = value;
            arr.shift();
        }
    }
    obj.body = arr.join(' ');
    arr.shift();
    console.log(obj);
    return obj;
}

parseHeaders(text);
      


module.exports = parseHeaders;
