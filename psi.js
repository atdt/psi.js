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
    var str;
    if (start === undefined) {
        str = this;
    } else if (end === undefined) {
        str = this.slice(start);
    } else {
        str = this.slice(start, end);
    }

    return --str.split(sub).length;
}

py.encode = function() {
    return;
}

py.endswith = function(str) {
    // this will break in ie
    return this.substr(0 - str.length) === str;
}

py.expandtabs = function(tabsize) {
    if (tabsize === undefined) {
        tabsize = 8;
    }

    columns = this.split('\t');
    for (var i = 0; i < columns.length; i++) {
        columns[i] += ' '.times(Math.abs(tabsize - (columns[i].length % 8)));
    }
    return columns.join(' ');
}

py.find = function(sub, start, end) {
    var str;
    if (start === undefined) {
        str = this;
    } else if (end === undefined) {
        str = this.slice(start);
    } else {
        str = this.slice(start, end);
    }

    return str.indexOf(sub);
}

py.format = function () {
    return;
}

py.index(sub, start, end) {
    var str;
    if (start === undefined) {
        str = this;
    } else if (end === undefined) {
        str = this.slice(start);
    } else {
        str = this.slice(start, end);
    }

    index = str.indexOf(sub);
    if (index === -1) throw "ValueError";
    else return index;
}

py.isalnum = function() {
}

py.isdigit = function(str) {
    return parseInt(str) == str;
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

