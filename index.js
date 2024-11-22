/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

function parseOvertimeDate(i) {
  if (!i) { return i; }
  i = String(i);
  var m = /\d+(?=:)/.exec(i), d, h, w;
  if (!m) { throw new Error('Found no hour number in: ' + d); }
  h = +m[0]; // original hour number
  w = h % 24; // wall clock hour number
  h -= w; // keep only the extra hours
  w = (i.slice(0, m.index) + (100 + w).toFixed(0).slice(1)
    + i.slice(m.index + m[0].length));
  try {
    d = new Date(w);
    m = d.getTime();
    if (!Number.isFinite(m)) { throw new Error('Cannot calculate timestamp'); }
  } catch (c) {
    m = new Error('Bad base date ' + JSON.stringify(w)
      + ', derived from input ' + JSON.stringify(i) + ': ' + c);
    throw m;
  }
  m += h * 36e5; // 36e5 msec = 1 hour
  d.setTime(m);
  w = null;
  try { w = d.toISOString(); } catch (c) { w = c; }
  return d;
}


module.exports = parseOvertimeDate;
