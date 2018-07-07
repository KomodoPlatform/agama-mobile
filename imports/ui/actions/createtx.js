import { Promise } from 'meteor/promise';

import { devlog } from './dev';
import { listunspent } from './listunspent';
import { isAssetChain } from './utils';
import electrumServers from './electrumServers';
import electrumJSNetworks from 'agama-wallet-lib/src/bitcoinjs-networks';
import transactionBuilder from 'agama-wallet-lib/src/transaction-builder';

const CONNECTION_ERROR_OR_INCOMPLETE_DATA = 'connection error or incomplete data';

export const createtx = (proxyServer, electrumServer, outputAddress, changeAddress, value, fee, wif, network, verify, push, cache) => {
  devlog('createrawtx =>');

  return new Promise((resolve, reject) => {
    listunspent(
      proxyServer,
      electrumServer,
      changeAddress,
      network,
      true,
      verify,
      cache
    )
    .then((utxoList) => {
      if (utxoList &&
          utxoList.length) {
        const _network = electrumJSNetworks[isAssetChain(network) ? 'kmd' : network];    
        let _data = transactionBuilder.data(
          _network,
          value,
          fee,
          outputAddress,
          changeAddress,
          utxoList
        );

        devlog('send data', _data);

        if (_data.balance) {
          if (!push) {
            resolve ({
              msg: 'success',
              result: _data,
            });
          }
        } else {
          resolve({
            msg: 'error',
            result: _data,
          });
        }

        const _tx = transactionBuilder.transaction(
          outputAddress,
          changeAddress,
          wif,
          _network,
          _data.inputs,
          _data.change,
          _data.value
        );

        // push to network
        if (push) {
          HTTP.call('POST', `http://${proxyServer.ip}:${proxyServer.port}/api/pushtx`, {
            headers: {
              'Content-Type': 'application/json',
            },
            data: {
              rawtx: _tx,
              port: electrumServer.port,
              ip: electrumServer.ip,
              proto: electrumServer.proto,
            },
          }, (error, result) => {
            result = JSON.parse(result.content);

            if (result.msg === 'error') {
              resolve({
                msg: 'error',
                result: 'Connection error. Please retry.',
              });
            } else {
              const txid = result.result;
              _data.raw = _tx;
              _data.txid = txid; 
              _data.utxoSet = utxoList;           

              if (txid &&
                  txid.indexOf('bad-txns-inputs-spent') > -1) {
                const successObj = {
                  msg: 'error',
                  result: 'Bad transaction inputs spent',
                  raw: _data,
                };

                resolve(successObj);
              } else {
                if (txid &&
                    txid.length === 64) {
                  if (txid.indexOf('bad-txns-in-belowout') > -1) {
                    const successObj = {
                      msg: 'error',
                      result: 'Bad transaction inputs spent',
                      raw: _data,
                    };

                    resolve(successObj);
                  } else {
                    const successObj = {
                      msg: 'success',
                      result: _data,
                    };

                    resolve(successObj);
                  }
                } else {
                  if (txid &&
                      txid.indexOf('bad-txns-in-belowout') > -1) {
                    const successObj = {
                      msg: 'error',
                      result: 'Bad transaction inputs spent',
                      raw: _data,
                    };

                    resolve(successObj);
                  } else {
                    const successObj = {
                      msg: 'error',
                      result: 'Can\'t broadcast transaction',
                      raw: _data,
                    };

                    resolve(successObj);
                  }
                }
              }
            }
          });
        }
      } else {
        resolve ({
          msg: 'error',
          result: 'No available UTXO(s) or connection error',
        });
      }
    });
  });
}

/*
export const createtx = (proxyServer, electrumServer, outputAddress, changeAddress, value, defaultFee, wif, network, verify, push, cache) => {
  return new Promise((resolve, reject) => {
    if (network !== 'btc') {
      defaultFee = electrumServers[network].txfee;
    }

    devlog('createrawtx =>');

    listunspent(
      proxyServer,
      electrumServer,
      changeAddress,
      network,
      true,
      verify,
      cache
    )
    .then((utxoList) => {
      if (utxoList &&
          utxoList.length) {
        let utxoListFormatted = [];
        let totalInterest = 0;
        let totalInterestUTXOCount = 0;
        let interestClaimThreshold = 200;
        let utxoVerified = true;

        for (let i = 0; i < utxoList.length; i++) {
          if (network === 'kmd') {
            utxoListFormatted.push({
              txid: utxoList[i].txid,
              vout: utxoList[i].vout,
              value: Number(utxoList[i].amountSats),
              interestSats: Number(utxoList[i].interestSats),
              verified: utxoList[i].verified ? utxoList[i].verified : false,
            });
          } else {
            utxoListFormatted.push({
              txid: utxoList[i].txid,
              vout: utxoList[i].vout,
              value: Number(utxoList[i].amountSats),
              verified: utxoList[i].verified ? utxoList[i].verified : false,
            });
          }
        }

        devlog('electrum listunspent unformatted ==>');
        devlog(utxoList);

        devlog('electrum listunspent formatted ==>');
        devlog(utxoListFormatted);

        const _maxSpendBalance = Number(maxSpendBalance(utxoListFormatted));
        let targets = [{
          address: outputAddress,
          value: value > _maxSpendBalance ? _maxSpendBalance : value,
        }];
        devlog('targets =>');
        devlog(targets);
        devlog(`create tx network ${network}`)

        targets[0].value = targets[0].value + defaultFee;

        // devlog(`fee rate ${feeRate}`);
        devlog(`default fee ${defaultFee}`);
        devlog(`targets ==>`);
        devlog(targets);

        // default coin selection algo blackjack with fallback to accumulative
        // make a first run, calc approx tx fee
        // if ins and outs are empty reduce max spend by txfee
        let {
          inputs,
          outputs,
          fee
        } = coinSelect(utxoListFormatted, targets, 0);

        devlog('coinselect res =>');
        devlog('coinselect inputs =>');
        devlog(inputs);
        devlog('coinselect outputs =>');
        devlog(outputs);
        devlog('coinselect calculated fee =>');
        devlog(fee);

        if (!outputs) {
          targets[0].value = targets[0].value - defaultFee;
          devlog('second run');
          devlog('coinselect adjusted targets =>');
          devlog(targets);

          const secondRun = coinSelect(utxoListFormatted, targets, 0);
          inputs = secondRun.inputs;
          outputs = secondRun.outputs;
          fee = secondRun.fee;

          devlog('coinselect inputs =>');
          devlog(inputs);
          devlog('coinselect outputs =>');
          devlog(outputs);
          devlog('coinselect fee =>');
          devlog(fee);
        }

        let _change = 0;

        if (outputs &&
            outputs.length === 2) {
          _change = outputs[1].value;
        }

        outputs[0].value = outputs[0].value - defaultFee;

        devlog('adjusted outputs, value - default fee =>');
        devlog(outputs);

        // check if any outputs are unverified
        if (inputs &&
            inputs.length) {
          for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].verified) {
              utxoVerified = false;
              break;
            }
          }

          for (let i = 0; i < inputs.length; i++) {
            if (Number(inputs[i].interestSats) > interestClaimThreshold) {
              totalInterest += Number(inputs[i].interestSats);
              totalInterestUTXOCount++;
            }
          }
        }

        const _maxSpend = maxSpendBalance(utxoListFormatted);

        if (value > _maxSpend) {
          const successObj = {
            msg: 'error',
            result: `Spend value is too large. Max available amount is ${Number((_maxSpend * 0.00000001.toFixed(8)))}`,
          };

          resolve(successObj);
        } else {
          devlog(`maxspend ${_maxSpend} (${_maxSpend * 0.00000001})`);
          devlog(`value ${value}`);
          devlog(`sendto ${outputAddress} amount ${value} (${value * 0.00000001})`);
          devlog(`changeto ${changeAddress} amount ${_change} (${_change * 0.00000001})`);

          // account for KMD interest
          if ((network === 'komodo' || network === 'kmd') &&
              totalInterest > 0) {
            // account for extra vout
            // const _feeOverhead = outputs.length === 1 ? estimateTxSize(0, 1) * feeRate : 0;
            const _feeOverhead = 0;

            devlog(`max interest to claim ${totalInterest} (${totalInterest * 0.00000001})`);
            devlog(`estimated fee overhead ${_feeOverhead}`);
            devlog(`current change amount ${_change} (${_change * 0.00000001}), boosted change amount ${_change + (totalInterest - _feeOverhead)} (${(_change + (totalInterest - _feeOverhead)) * 0.00000001})`);

            if (_maxSpend === value) {
              _change = Math.abs(totalInterest) - _change - _feeOverhead;

              if (outputAddress === changeAddress) {
                value += _change;
                _change = 0;
                devlog(`send to self ${outputAddress} = ${changeAddress}`);
                devlog(`send to self old val ${value}, new val ${value + _change}`);
              }
            } else {
              _change = _change + (Math.abs(totalInterest) - _feeOverhead);
            }
          }

          if (!inputs &&
              !outputs) {
            const successObj = {
              msg: 'error',
              result: 'Can\'t find best fit utxo. Try lower amount.',
            };

            resolve(successObj);
          } else {
            let vinSum = 0;

            for (let i = 0; i < inputs.length; i++) {
              vinSum += inputs[i].value;
            }

            const _estimatedFee = vinSum - outputs[0].value - _change;

            devlog(`vin sum ${vinSum} (${vinSum * 0.00000001})`);
            devlog(`estimatedFee ${_estimatedFee} (${_estimatedFee * 0.00000001})`);

            let _rawtx;

            if (network === 'btg' ||
                network === 'bch') {
              _rawtx = buildSignedTxForks(
                outputAddress,
                changeAddress,
                wif,
                network,
                inputs,
                _change,
                value
              );
            } else {
              _rawtx = buildSignedTx(
                outputAddress,
                changeAddress,
                wif,
                network,
                inputs,
                _change,
                value
              );
            }

            if (!push ||
                push === 'false') {
              const successObj = {
                msg: 'success',
                result: {
                  utxoSet: inputs,
                  change: _change,
                  inputs,
                  outputs,
                  // wif,
                  fee,
                  value,
                  outputAddress,
                  changeAddress,
                  network,
                  rawtx: _rawtx,
                  utxoVerified,
                },
              };

              resolve(successObj);
            } else {
              HTTP.call('POST', `http://${proxyServer.ip}:${proxyServer.port}/api/pushtx`, {
                headers: {
                  'Content-Type': 'application/json',
                },
                data: {
                  rawtx: _rawtx,
                  port: electrumServer.port,
                  ip: electrumServer.ip,
                  proto: electrumServer.proto,
                },
              }, (error, result) => {
                result = JSON.parse(result.content);

                if (result.msg === 'error') {
                  resolve({
                    msg: 'error',
                    result: 'pushtx failed',
                  });
                } else {
                  const txid = result.result;

                  if (txid &&
                      txid.indexOf('bad-txns-inputs-spent') > -1) {
                    const successObj = {
                      msg: 'error',
                      result: 'Bad transaction inputs spent',
                      raw: {
                        utxoSet: inputs,
                        inputs,
                        outputs,
                        change: _change,
                        fee,
                        value,
                        outputAddress,
                        changeAddress,
                        network,
                        rawtx: _rawtx,
                        txid,
                        utxoVerified,
                      },
                    };

                    resolve(successObj);
                  } else {
                    if (txid &&
                        txid.length === 64) {
                      if (txid.indexOf('bad-txns-in-belowout') > -1) {
                        const successObj = {
                          msg: 'error',
                          result: 'Bad transaction inputs spent',
                          raw: {
                            utxoSet: inputs,
                            inputs,
                            outputs,
                            change: _change,
                            fee,
                            value,
                            outputAddress,
                            changeAddress,
                            network,
                            rawtx: _rawtx,
                            txid,
                            utxoVerified,
                          },
                        };

                        resolve(successObj);
                      } else {
                        const successObj = {
                          msg: 'success',
                          result: {
                            utxoSet: inputs,
                            inputs,
                            outputs,
                            change: _change,
                            fee,
                            // wif,
                            value,
                            outputAddress,
                            changeAddress,
                            network,
                            rawtx: _rawtx,
                            txid,
                            utxoVerified,
                          },
                        };

                        resolve(successObj);
                      }
                    } else {
                      if (txid &&
                          txid.indexOf('bad-txns-in-belowout') > -1) {
                        const successObj = {
                          msg: 'error',
                          result: 'Bad transaction inputs spent',
                          raw: {
                            utxoSet: inputs,
                            inputs,
                            outputs,
                            change: _change,
                            fee,
                            value,
                            outputAddress,
                            changeAddress,
                            network,
                            rawtx: _rawtx,
                            txid,
                            utxoVerified,
                          },
                        };

                        resolve(successObj);
                      } else {
                        const successObj = {
                          msg: 'error',
                          result: 'Can\'t broadcast transaction',
                          raw: {
                            utxoSet: inputs,
                            inputs,
                            outputs,
                            change: _change,
                            fee,
                            value,
                            outputAddress,
                            changeAddress,
                            network,
                            rawtx: _rawtx,
                            txid,
                            utxoVerified,
                          },
                        };

                        resolve(successObj);
                      }
                    }
                  }
                }
              });
            }
          }
        }
      } else {
        resolve ({
          msg: 'error',
          result: utxoList,
        });
      }
    });
  });
}*/