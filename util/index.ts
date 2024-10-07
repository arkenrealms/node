import crypto from 'crypto';
import { exec } from 'child_process';
// import jetpack from 'fs-jetpack';
import * as ethers from 'ethers';
import _ from 'lodash';
import config from './config';
import * as time from './time';
import * as objects from './object';
import * as db from './db';
import * as api from './api';
import * as guid from './guid';
import * as number from './number';
import * as string from './string';
import * as process2 from './process';
import * as web3 from './web3';
import * as math from './math';
import * as json from './json';
import * as format from './format';
// import * as browser from './browser';
export * as decoder from './decoder';

const path = require('path');
const writeLogs = false;
const logPrefix = process.env.LOG_PREFIX || '[APP]';

export const isDebug =
  process.env.HOME === '/Users/dev' ||
  process.env.HOME === '/home/dev' ||
  process.env.HOME === '/root' ||
  process.env.LOG === '1';

export function logError(...msgs) {
  console.log(logPrefix, nowReadable(), ...msgs);

  // const errorLog = jetpack.read(path.resolve('./public/data/errors.json'), 'json') || [];

  // for (const msg of msgs) {
  //   errorLog.push(JSON.stringify(msg));
  // }

  if (writeLogs) {
    // jetpack.write(path.resolve('./public/data/errors.json'), JSON.stringify(errorLog, null, 2), { atomic: true });
  }

  // console.log(msgs);

  // throw new Error(msgs.join('; '));
}

export function log(...msgs) {
  if (isDebug) {
    console.log(logPrefix, nowReadable(), ...msgs);
  }

  if (writeLogs) {
    // const logData = jetpack.read(path.resolve('../public/data/log.json'), 'json') || [];
    // for (const msg of msgs) {
    //   logData.push(JSON.stringify(msg));
    // }
    // jetpack.write(path.resolve('./public/data/log.json'), JSON.stringify(logData, null, 2));
  }
}

export function nowReadable() {
  return new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
}

export function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function round(num, precision) {
  const _precision = 10 ** precision;
  return Math.ceil(num * _precision) / _precision;
}

export function pad(n, width, z = '0') {
  const nn = n + '';
  return nn.length >= width ? nn : new Array(width - nn.length + 1).join(z) + nn;
}

export function removeDupes(list) {
  const seen = {};
  return list.filter(function (item) {
    const k1 = item.seller + item.tokenId + item.blockNumber;
    const k2 = item.id;
    const exists = seen.hasOwnProperty(k1) || seen.hasOwnProperty(k2);

    if (!exists) {
      seen[k1] = true;
      seen[k2] = true;
    }

    return !exists;
  });
}

export const toLong = (x) => ethers.utils.parseEther(x + '');
export const toShort = (x) => round(parseFloat(ethers.utils.formatEther(x)), 4);

let updatingGit = false;

export async function updateGit() {
  if (updatingGit) return;

  updatingGit = true;
  try {
    const execPromise = require('util').promisify(exec);

    try {
      await execPromise('rm ./db/.git/index.lock');
    } catch (e2) {}

    const { stdout, stderr } = await execPromise(
      'cd db && git add -A && git commit -m "build: Binzy doz it" && git push --set-upstream origin master'
    );

    console.log(stderr, stdout);

    await wait(100);
  } catch (e) {
    console.log(e);
  }

  updatingGit = false;
}

export function groupBySub(xs, key, subkey) {
  return (
    xs.reduce(function (rv, x) {
      if (!x[key][subkey]) return rv;
      (rv[x[key][subkey]] = rv[x[key][subkey]] || []).push(x);
      return rv;
    }, {}) || null
  );
}

export function groupBy(xs, key) {
  return (
    xs.reduce(function (rv, x) {
      if (!x[key]) return rv;
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {}) || null
  );
}

export function getHighestId(arr) {
  let highest = 0;

  for (const item of arr) {
    if (item.id > highest) {
      highest = item.id;
    }
  }

  return highest;
}

export function average(arr) {
  return arr.reduce((p, c) => p + c, 0) / arr.length;
}

export function ordinalise(n) {
  return (
    n +
    (n % 10 == 1 && n % 100 != 11
      ? 'st'
      : n % 10 == 2 && n % 100 != 12
      ? 'nd'
      : n % 10 == 3 && n % 100 != 13
      ? 'rd'
      : 'th')
  );
}
export function commarise(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function getTime() {
  return new Date().getTime();
}

export const capitalizeFirstLetters = (text?: string) => text != null && _.startCase(text?.toLowerCase());

export function convertToDecimal(byte) {
  let result = 0;

  byte = byte.split('');

  byte.reverse();

  for (let a = 0; a < byte.length; a++) {
    if (byte[a] === '1') {
      result += 2 ** a;
    }
  }

  return result;
}

export const phoneMask = (phone: string) => {
  //This regular expression provides the pattern for a phone number in format 000-000-0000
  const x = phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  return !x[2] ? x[1] : x[1] + '-' + x[2] + (x[3] ? '-' + x[3] : '');
};

export function binaryAgent(str) {
  let bytes = str.split(' ');
  let output = '';

  for (let k = 0; k < bytes.length; k++) {
    if (bytes[k]) output += String.fromCharCode(convertToDecimal(bytes[k]));
  }

  return output;
}

export function decodePayload(msg) {
  // @ts-ignore
  let json = binaryAgent(msg); //String.fromCharCode.apply(null, new Uint8Array(msg));

  try {
    // explicitly decode the String as UTF-8 for Unicode
    //   https://github.com/mathiasbynens/utf8.js
    // json = utf8.decode(json)
    // const buffer = Buffer.from(json, "binary");
    const data = JSON.parse(json);

    return data;
  } catch (err) {
    // ...
    console.log(err);
  }
}

export function isNumeric(str) {
  if (typeof str != 'string') return false; // we only process strings!
  return (
    // @ts-ignore
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
}

/**
 * Wrapper around fetch with an optional timeout
 * @param {Url} url
 * @param {Request} request
 * @param {number} timeout
 */
async function fetchWithTimeout(url, request, timeout) {
  return Promise.race([
    fetch(url, request),
    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeout)),
  ]);
}

export function sha256(str) {
  return crypto.createHash('sha256').update(str, 'utf8').digest('base64');
}

// /**
//  * sha256 encodes a given string message
//  * @param {string} message
//  * Borrowed from
//  * https://developers.cloudflare.com/workers/examples/cache-api
//  */
// async function sha256(message) {
//   // encode as UTF-8
//   const msgBuffer = new TextEncoder().encode(message)
//   // hash the message
//   const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer)
//   // convert ArrayBuffer to Array
//   const hashArray = Array.from(new Uint8Array(hashBuffer))
//   // convert bytes to hex string
//   const hashHex = hashArray.map(b => ("00" + b.toString(16)).slice(-2)).join("")
//   return hashHex
// }

export function randomPosition(min, max) {
  return Math.random() * (max - min) + min;
}

export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

export const getAddress = (address) => {
  const mainNetChainId = 56;
  const chainId = window?.location?.hostname === 'testnet.arken.gg' ? 97 : process.env.REACT_APP_CHAIN_ID;
  return address[chainId] ? address[chainId] : address[mainNetChainId];
};

export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const isEthereumAddress = (address: string) => {
  // Regular expression to check if the string is a valid Ethereum address
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

export const ipHashFromSocket = (socket) => {
  const ip = socket.handshake.headers['x-forwarded-for']?.split(',')[0] || socket.conn.remoteAddress?.split(':')[3];
  let hash = ip ? sha256(ip.slice(ip.length / 2)) : '';
  hash = ip ? hash.slice(hash.length - 10, hash.length - 1) : '';

  return hash;
};

export default {
  objects,
  api,
  guid,
  number,
  string,
  process: process2,
  web3,
  math,
  json,
  db,
  format,
  // browser,
  config,
  time,
};
