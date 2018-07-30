'use strict';

/* eslint-env node */

function parseHeaders(text) {
    let obj = {};
    obj.headers = {};
    obj.body;
    let arr = text.split('\n');
    let count = 0;
    while (arr.length > 0) {
        if (count === 0) {
        let lineOneArr = arr[0].split(' ');
        obj.version = lineOneArr[0];
        obj.code = lineOneArr[1];
        arr.shift();
        count++;
        } 
        else {
        let keyValueArr = arr[0].split(': ');
        if (keyValueArr[0].length === 0){
            break;
        } 
        else {
            obj.headers[keyValueArr[0]] = keyValueArr[1];
            arr.shift();
        }
        }
    }
    obj.body = arr.join(' ');
    arr.shift();
    console.log(obj);
    return obj;
}
      


module.exports = parseHeaders;
