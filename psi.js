/* psi.js 
 * Pythonic Strings for JavaScript
 * https://github.com/zelak/psi.js
 *
 * psi.js is an implementation of the Python Standard Library's
 * string methods in pure JavaScript.
 * See http://docs.python.org/dev/library/stdtypes.html#string-methods
 *
 * Copyright 2011, Ori Livneh
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */

    // whitespace = ' \t\n\r\v\f';
    // ascii_lowercase = 'abcdefghijklmnopqrstuvwxyz';
    // ascii_uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // ascii_letters = ascii_lowercase + ascii_uppercase;
    // digits = '0123456789';
    // hexdigits = digits + 'abcdef' + 'ABCDEF';
    // octdigits = '01234567';
    // punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    // printable = digits + ascii_letters + punctuation + whitespace


/* JavaScript string multiplication
 * http://cixar.com/~kris.kowal/  */


py = String.prototype;

/* helper function: multiply strings */
py.times = function(num) {
    return Array(num + 1).join(this);
}

/* python */
py.capitalize = function() {
    return this.substr(0, 1).toUpperCase() + this.substr(1).toLowerCase();
}

py.center = function(width, padding) {
    if (padding === undefined) {
        padding = ' ';
    }

    var margin = width - this.length;
        left = Math.floor(margin / 2) + (margin & width & 1);
    return padding.times(left) + this + padding.times(margin - left);
}

py.count = function(sub, start, end) {
    if (start === undefined) {
        start = 0;
    }
    if (end === undefined) {
        start = -1;
    }

    return --this.split(sub).length;
}

py.startswith = function(str) {
    // todo: take optional parameters
    return this.substr(0 , str.length) === str;
}

py.splitlines = function(keepends) {
    // todo: keep newlines if keepends is true
    return this.split('\n');
}

py.upper = function() {
    return this.toUpperCase();
}

py.isupper = function() {
    return this == this.toUpperCase();
}

py.endswith = function(str) {
    // this will break in ie
    return this.substr(0 - str.length) === str;
}

