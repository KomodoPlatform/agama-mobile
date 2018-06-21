import React from 'react';
import jsQR from 'jsqr';
import {
  setLocalStorageVar,
  getLocalStorageVar,
  convertURIToImageData,
} from '../actions/utils';
import {
  encryptkey,
  decryptkey,
} from '../actions/seedCrypt';
import { translate } from '../translate/translate';

class Pin extends React.Component {
  constructor() {
    super();
    this.state = {
      passphrase: null,
      passphraseTooShort: false,
      pinOverride: null,
      pinOverrideTooShort: false,
      pinSet: false,
      qrScanError: false,
    };
    this.defaultState = JSON.parse(JSON.stringify(this.state));
    this.updateInput = this.updateInput.bind(this);
    this.scanQR = this.scanQR.bind(this);
    this.save = this.save.bind(this);
  }

  updateInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  scanQR() {
    MeteorCamera.getPicture({
      quality: 100,
    }, (error, data) => {
      if (error) {
        this.setState({
          qrScanError: true,
        });
      } else {
        convertURIToImageData(data)
        .then((imageData) => {
          const decodedQR = jsQR.decodeQRFromImage(imageData.data, imageData.width, imageData.height);

          if (!decodedQR) {
            this.setState({
              qrScanError: true,
            });
          } else {
            this.setState({
              qrScanError: false,
              passphrase: decodedQR,
            });
          }
        });
      }
    });
  }

  save() {
    if (!this.state.passphrase) {
      this.setState({
        passphraseTooShort: true,
      });
    } else {
      if (this.state.pinOverride &&
          this.state.pinOverride.length >= 6) {
        const _encryptedKey = encryptkey(this.state.pinOverride, this.state.passphrase);

        setLocalStorageVar('seed', { encryptedKey: _encryptedKey });
        this.setState({
          pinSet: true,
          pinOverrideTooShort: false,
          qrScanError: false,
          passphraseTooShort: false,
        });

        setTimeout(() => {
          this.setState(this.defaultState);
          this.props.changeActiveSection('login');
        }, 500);
      } else {
        this.setState({
          pinOverrideTooShort: true,
          qrScanError: false,
          passphraseTooShort: false,
        });
      }
    }
  }

  render() {
    return (
      <div className="form pin-override">
        <div className="margin-top-40 padding-bottom-30 text-center fs14">
        Provide a seed and enter 6 digit PIN number in the form below.
        </div>
        <div
          onClick={ this.scanQR }
          className="group3 margin-bottom-10">
          <div className="rectangle10copy"></div>
          <div className="btn">{ translate('SEND.SCAN_QR') }</div>
          <div className="group2">
            <i className="fa fa-qrcode"></i>
          </div>
        </div>
        { this.state.qrScanError &&
          <div className="error margin-top-15 text-center">
            { translate('SEND.QR_SCAN_ERR') } <i className="fa fa-warning"></i>
          </div>
        }
        <div className="edit margin-bottom-10">
          <input
            type="password"
            name="passphrase"
            onChange={ this.updateInput }
            placeholder={ translate('LOGIN.ENTER_PASSPHRASE') + ' or WIF' }
            value={ this.state.passphrase || '' } />
        </div>
        { this.state.passphraseTooShort &&
          <div className="error margin-top-15 text-center">
            <i className="fa fa-warning"></i> Provide passhprase or WIF
          </div>
        }
        <div className="margin-bottom-25 margin-top-40 edit">
          <input
            type="password"
            name="pinOverride"
            onChange={ this.updateInput }
            placeholder={ translate('LOGIN.ENTER_6_DIGIT_PIN') }
            value={ this.state.pinOverride || '' } />
        </div>
        { this.state.pinOverrideTooShort &&
          <div className="error margin-top-15 text-center">
            <i className="fa fa-warning"></i> { translate('LOGIN.PIN_TOO_SHORT') }
          </div>
        }
        { this.state.pinSet &&
          <div className="margin-bottom-15 margin-top-15 text-center">Seed is encrypted with provided PIN. Use the PIN to login or sign a transaction.</div>
        }
        <div
          onClick={ this.save }
          className="group3 margin-top-40">
          <div className="rectangle10copy"></div>
          <div className="btn">Save</div>
          <div className="group2">
            <i className="fa fa-save"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Pin;