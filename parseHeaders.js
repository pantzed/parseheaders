'use strict';

/* eslint-env node */


function parseHeaders(text) {
    let arr = text.split('\n');

    let obj = {};
    obj.headers = {};
    obj.body;
    
    obj.version = arr[0].split(' ')[0];
    obj.code = arr[0].split(' ')[1];
    arr.shift();
    
    while (arr.length > 0) {
        if (arr[0].length === 0){
            break;
        } 
        else {
            let key = arr[0].match(/^([\w+\-]+)/g)[0];
            let value = arr[0].match(/\ (.*)$/g)[0].trim();
            obj.headers[key] = value;
            arr.shift();
        }
    }

    obj.body = arr.join(' ');
    arr.shift();

    return obj;

}

module.exports = parseHeaders;
