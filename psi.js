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
    // TODO: handle leading and trailing tabs correctly
    var a = [],
        tabbed = /[^\t]+/g,
        padded_str = "",
        str = this,
        get_pad_amount = function(length) {
            return Math.abs(tabsize - (length % tabsize));
        }

    if (tabsize === undefined) {
        tabsize = 8;
    }

    while  (a = tabbed.exec(str)) {
         padded_str += a[0] + ' '.times(get_pad_amount(a[0].length));
    }

    return padded_str;
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

py.index = function(sub, start, end) {
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
    return !/[\W^_]/.test(this);
}

py.isalpha = function() {
    return !!this[0] && !/[^A-Za-z]/.test(this);
}

py.isdigit = function(str) {
    return parseInt(str) == str;
    // About 20-30% slower:
    // return !!this[0] && !/[^\d]/.test(this);
}

py.isdigit2 = function(str) {
    return !!this[0] && !/[^\d]/.test(this);
}

py.islower = function() {
    return !!this[0] && (this == this.toLowerCase());
}

py.isspace = function() {
    return !!this[0] && !/[\S]/.test(this);
}

py.istitle = function() {
    return !!this[0] && !/([A-Za-z][A-Z]|[^A-Za-z][a-z])/.test(this);
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

py.isupper2 = function() {
    return /[A-Z]/.test(this) && !/[a-z]/.test(this);
}

py.join = function(iter) {
    // only works for arrays
    return iter.join(this);
}

py.ljust = function(width, fillchar) {
    // Why do we need to String(this) in the return statement? O.o 
    if (fillchar === undefined) {
        fillchar = ' ';
    }

    var pad_width = width - this.length;
    return pad_width > 0? fillchar.times(pad_width) + this : String(this);
}

py.partition = function(sep) {
    var split = this.split(sep, 1),
        tmp = split[1] || "";
    split[1] = sep,
    split[2] = tmp;
    return split;
} 
