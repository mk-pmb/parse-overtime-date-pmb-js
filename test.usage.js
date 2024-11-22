/*jslint indent: 2, maxlen: 80, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var overtime = require('./index.js'),
  equal = require('assert').strictEqual;

function overIso(x) { return overtime(x).toISOString(); }

equal(overIso('1970-01-01T12:00Z'), '1970-01-01T12:00:00.000Z');
equal(overIso('1970-01-01T24:00Z'), '1970-01-02T00:00:00.000Z');
equal(overIso('1970-01-01T30:00Z'), '1970-01-02T06:00:00.000Z');
equal(overIso('1970-01-01T243:00Z'), '1970-01-11T03:00:00.000Z');
equal(overIso('2024-11-21T28:06:21Z'), '2024-11-22T04:06:21.000Z');


console.log('+OK usage demo test passed.');
