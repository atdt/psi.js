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

function PythonicString(str) {
    var that = this;

    // Self-evoking constructor 
    if (!(this instanceof PythonicString)) {
        return new PythonicString(str);
    }

    // Helper functions -- we should wrap this
    // somehow so that they're private.
    this.times = function(s, num) {
        return Array(num + 1).join(s);
    }

    this.s = str;
}

PythonicString.prototype = {
    capitalize: function() {
        return this.s.substr(0, 1).toUpperCase() + this.s.substr(1).toLowerCase();
    },

    center: function(width, padding) {
        if (padding === undefined) {
            padding = ' ';
        }

        var margin = width - this.s.length;
            left = Math.floor(margin / 2) + (margin & width & 1);
        return padding.times(left) + this.s + padding.times(margin - left);
    },

    count: function(sub, start, end) {
        var str;
        if (start === undefined) {
            str = this.s;
        } else if (end === undefined) {
            str = this.s.slice(start);
        } else {
            str = this.s.slice(start, end);
        }

        return --str.split(sub).length;
    },

    encode: function() {
        return;
    },

    endswith: function(str) {
        // this.s will break in ie
        return this.s.substr(0 - str.length) === str;
    },

    expandtabs: function(tabsize) {
        // TODO: handle leading and trailing tabs correctly
        var a = [],
            tabbed = /[^\t]+/g,
            padded_str = "",
            str = this.s,
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
    },

    find: function(sub, start, end) {
        var str;
        if (start === undefined) {
            str = this.s;
        } else if (end === undefined) {
            str = this.s.slice(start);
        } else {
            str = this.s.slice(start, end);
        }

        return str.indexOf(sub);
    },

    format: function () {
        return;
    },

    index: function(sub, start, end) {
        var str;
        if (start === undefined) {
            str = this.s;
        } else if (end === undefined) {
            str = this.s.slice(start);
        } else {
            str = this.s.slice(start, end);
        }

        index = str.indexOf(sub);
        if (index === -1) throw "ValueError";
        else return index;
    },

    isalnum: function() {
        return !/[\W^_]/.test(this.s);
    },

    isalpha: function() {
        return !!this.s[0] && !/[^A-Za-z]/.test(this.s);
    },

    isdigit: function(str) {
        return parseInt(str) == str;
        // About 20-30% slower:
        // return !!this.s[0] && !/[^\d]/.test(this.s);
    },

    isdigit2: function(str) {
        return !!this.s[0] && !/[^\d]/.test(this.s);
    },

    islower: function() {
        return !!this.s[0] && (this.s == this.s.toLowerCase());
    },

    isspace: function() {
        return !!this.s[0] && !/[\S]/.test(this.s);
    },

    istitle: function() {
        return !!this.s[0] && !/([A-Za-z][A-Z]|[^A-Za-z][a-z])/.test(this.s);
    },

    startswith: function(str) {
        // todo: take optional parameters
        return this.s.substr(0 , str.length) === str;
    },

    splitlines: function(keepends) {
        // todo: keep newlines if keepends is true
        return this.s.split('\n');
    },

    upper: function() {
        return this.s.toUpperCase();
    },

    isupper: function() {
        return this.s == this.s.toUpperCase();
    },

    isupper2: function() {
        return /[A-Z]/.test(this.s) && !/[a-z]/.test(this.s);
    },

    join: function(iter) {
        // only works for arrays
        return iter.join(this.s);
    },

    ljust: function(width, fillchar) {
        if (fillchar === undefined) {
            fillchar = ' ';
        }

        var pad_width = width - this.s.length;
        return pad_width > 0? this.times(fillchar, pad_width) + this.s: this.s.toString();
    },

    partition: function(sep) {
        var i = this.s.indexOf(sep);
        if (!i) {
            return [ this.s, '', ''];
        } else {
            return [ this.s.substr(0, i), sep, this.s.substr(i + 1) ];
        }
    },

    replace: function(old_sub, new_sub, count) {
        // todo
        if (count === undefined) {
            // ...
            return;
        }
    },

    rfind: function(sub, start, end) {
        var str;
        if (start === undefined) {
            str = this.s;
        } else if (end === undefined) {
            str = this.s.slice(start);
        } else {
            str = this.s.slice(start, end);
        }

        return str.lastIndexOf(sub);
    },

    rindex: function(sub, start, end) {
        var str;
        if (start === undefined) {
            str = this.s;
        } else if (end === undefined) {
            str = this.s.slice(start);
        } else {
            str = this.s.slice(start, end);
        }

        index = str.lastIndexOf(sub);
        if (index === -1) throw "ValueError";
        else return index;
    },

    rjust: function(width, fillchar) {
        if (fillchar === undefined) {
            fillchar = ' ';
        }

        var pad_width = width - this.s.length;
        return pad_width > 0? this.s : this.s.toString() + this.times(fillchar, pad_width);
    },

    rpartition: function(sep) {
        var i = this.s.lastIndexOf(sep);
        if (!i) {
            return [ this.s, '', ''];
        } else {
            return [ this.s.substr(0, i), sep, this.s.substr(i + 1) ];
        }
    },

    zfill: function(width) {
        var pad_width = width - this.s.length;
        return pad_width > 0? this.s : this.s.toString() + this.times('0', pad_width);
    },

}

