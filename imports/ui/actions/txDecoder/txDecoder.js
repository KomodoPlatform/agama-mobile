const txDecoder = {
  default: require('./electrumTxDecoder.js'),
  zcash: require('./electrumTxDecoder2Byte.js'),
  pos: require('./electrumTxDecoderPoS.js'),
};

export const isZcash = (network) => {
  if (network === 'ZEC' ||
      network === 'zec' ||
      network === 'zcash' ||
      network === 'ZCASH' ||
      network === 'HUSH' ||
      network === 'hush' ||
      network === 'ZCL' ||
      network === 'zcl') {
    return true;
  }
};

export const isPos = (network) => {
  if (network === 'BLK' ||
      network === 'blk' ||
      network === 'DNR' ||
      network === 'dnr') {
    return true;
  }
};

export const electrumJSTxDecoder = (rawtx, networkName, network) => {
  if (isZcash(networkName)) {
    return txDecoder.zcash(rawtx, network);
  } else if (isPos(networkName)) {
    return txDecoder.pos(rawtx, network);
  } else {
    return txDecoder.default(rawtx, network);
  }
};
