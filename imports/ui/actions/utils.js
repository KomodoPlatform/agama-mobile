export const kmdCalcInterest = (locktime, value) => { // value in sats
  const timestampDiff = Math.floor(Date.now() / 1000) - locktime - 777;
  let timestampDiffMinutes = timestampDiff / 60;
  let interest = 0;

  // calc interest
  if (timestampDiffMinutes >= 60) {
    if (timestampDiffMinutes > 365 * 24 * 60) {
      timestampDiffMinutes = 365 * 24 * 60;
    }
    timestampDiffMinutes -= 59;

    interest = ((Number(value) * 0.00000001) / 10512000) * timestampDiffMinutes;
  }

  return interest;
}

export const secondsToString = (seconds, skipMultiply, showSeconds) => {
  const a = new Date(seconds * (skipMultiply ? 1 : 1000));
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours() < 10 ? `0${a.getHours()}` : a.getHours();
  const min = a.getMinutes() < 10 ? `0${a.getMinutes()}` : a.getMinutes();
  const sec = a.getSeconds();
  const time = `${date} ${month} ${year} ${hour}:${min}${(showSeconds ? ':' + sec : '')}`;

  return time;
}

export const estimateTxSize = (numVins, numOuts) => {
  // in x 180 + out x 34 + 10 plus or minus in
  return numVins * 180 + numOuts * 34 + 11;
}

export const sortBy = (data, sortKey) => {
  return data.sort((b, a) => {
    if (a[sortKey] < b[sortKey]) {
      return -1;
    }

    if (a[sortKey] > b[sortKey]) {
      return 1;
    }

    return 0;
  });
}

export const isNumber = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

export const isPositiveNumber = (value) => {
  return isNumber(value) && (+value) > 0;
}

export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// display rounding
export const formatValue = (formatValue) => {
  const _valueToStr = formatValue.toString();

  if (_valueToStr.indexOf('.') === -1) {
    return formatValue;
  } else {
    if (_valueToStr) {
      const _decimal = _valueToStr.substr(_valueToStr.indexOf('.') + 1, _valueToStr.length);
      let newVal = _valueToStr.substr(0, _valueToStr.indexOf('.') + 1);

      for (let i = 0; i < _decimal.length; i++) {
        if (_decimal[i] === '0') {
          newVal = newVal + _decimal[i];
        } else {
          newVal = newVal + _decimal[i];
          break;
        }
      }

      return newVal;
    }
  }
}

export const maskPubAddress = (pub) => {
  // keep 3 first and 3 last chars unmasked
  let masked = '';

  for (let i = 0; i < pub.length - 3 * 2; i++) {
    masked = masked + '*';
  }

  return pub[0] + pub[1] + pub[2] + masked + pub[pub.length - 3] + pub[pub.length - 2] + pub[pub.length - 1];
}

export const isAssetChain = (coin) => {
  coin = coin.toUpperCase();

  if (coin === 'SUPERNET' ||
      coin === 'REVS' ||
      coin === 'PANGEA' ||
      coin === 'DEX' ||
      coin === 'JUMBLR' ||
      coin === 'BET' ||
      coin === 'CRYPTO' ||
      coin === 'COQUI' ||
      coin === 'OOT' ||
      coin === 'HODL' ||
      coin === 'SHARK' ||
      coin === 'MSHARK' ||
      coin === 'BOTS' ||
      coin === 'MGW' ||
      coin === 'MVP' ||
      coin === 'KV' ||
      coin === 'CEAL' ||
      coin === 'MESH' ||
      coin === 'WLC' ||
      coin === 'MNZ' ||
      coin === 'BTCH' ||
      coin === 'BNTN' ||
      coin === 'komodo' ||
      coin === 'KMD') {
    return true;
  }

  return false;
}

export const setLocalStorageVar = (name, json) => {
  const _json = JSON.stringify(json);

  localStorage.setItem(name, _json);
}

export function getLocalStorageVar(name) {
  const _var = localStorage.getItem(name);

  if (_var) {
    const _json = JSON.parse(_var);

    return _json;
  } else {
    return null;
  }
}

export const coinsList = [
  'CHIPS',
  'SUPERNET',
  'REVS',
  'PANGEA',
  'DEX',
  'JUMBLR',
  'BET',
  'CRYPTO',
  'COQUI',
  'OOT',
  'HODL',
  'SHARK',
  'MSHARK',
  'BOTS',
  'MGW',
  'BTCH',
  //'MVP',
  'KV',
  //'CEAL',
  'MESH',
  'WLC',
  'MNZ',
  'BNTN',
  'DOGE',
  'DNR',
  'DGB',
  'BTG',
  'BLK',
  'BCH',
  'FAIR',
  'VIA',
  'MONA',
  'ZEC',
  'HUSH',
  'ARG',
  'DASH',
  'CRW',
  'VTC',
  'LTC',
  'NMC',
  'SIB',
  'XMY',
  'ZCL'
];

export const explorers = {
  KMD: 'http://kmd.komodochainz.info',
  MSHARK: 'http://MSHARK.explorer.supernet.org',
  REVS: 'http://revs.explorer.supernet.org',
  SUPERNET: 'http://SUPERNET.explorer.supernet.org',
  DEX: 'http://DEX.explorer.supernet.org',
  PANGEA: 'http://PANGEA.explorer.supernet.org',
  JUMBLR: 'http://JUMBLR.explorer.supernet.org',
  BET: 'http://BET.explorer.supernet.org',
  CRYPTO: 'http://CRYPTO.explorer.supernet.org',
  HODL: 'http://HODL.explorer.supernet.org',
  SHARK: 'http://SHARK.explorer.supernet.org',
  BOTS: 'http://BOTS.explorer.supernet.org',
  MGW: 'http://MGW.explorer.supernet.org',
  WLC: 'http://WIRELESS.explorer.supernet.org',
  DNR: 'https://denariusexplorer.org',
  CHIPS: 'http://chips1.explorer.supernet.org',
  COQUI: 'https://explorer.coqui.cash',
  OOT: 'https://explorer.utrum.io',
  MNZ: 'https://www.mnzexplorer.com',
};

export const convertURIToImageData = (URI) => {
  return new Promise((resolve, reject) => {
    if (URI === null) {
      return reject();
    }

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const image = new Image();

    image.addEventListener('load', () => {
      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(context.getImageData(0, 0, canvas.width, canvas.height));
    }, false);

    image.src = URI;
  });
};
