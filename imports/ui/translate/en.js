const lang = {
  EN: {
    API: {
      NO_UTXO_ERR: 'No available UTXO(s) or connection error',
      CANT_BROADCAST_TX_ERR: 'Can\'t broadcast transaction',
      BAD_TX_INPUTS_SPENT_ERR: 'Bad transaction inputs spent',
      CON_ERROR: 'Connection error. Please retry.',
    },
    SETTINGS: {
      SAVED: 'Settings are saved',
      AUTOLOCK_TIMEOUT: 'Auto lock timeout',
      MINUTES: 'minutes',
      SAVE: 'Save',
      REQUIRE_PIN_CONFIRM: 'Require PIN to confirm transaction',
    },
    RECOVERY: {
      PROVIDE_YOUR_PIN: 'Provide your PIN number to unlock seed/WIF.',
      SHOW: 'Show',
    },
    PIN: {
      SAVE: 'Save',
      SEED_IS_ENCRYPTED: 'Seed is encrypted with provided PIN. Use the PIN to login or sign a transaction.',
      PROVIDE_A_PASSPHRASE: 'Provide seed or WIF',
      PROVIDE_A_SEED: 'Provide a seed and enter 6 digit PIN number in the form below',
    },
    OVERVIEW: {
      PRICES_ERROR: 'Atomicexplorer.com is unreachable!',
      TOTAL_VALUE: 'Total Value',
      PER_COIN: 'per coin',
      YOUR_COINS: 'Your Coins',
    },
    OFFLINE: {
      TX_SIG_FAIL: 'failed to sign transaction',
      CONFIRM: 'Confirm',
      TX_PIN_CONFIRM: 'To confirm transaction provide PIN and press the button below.',
      OFFLINE_TX_SIG: 'Offline Transaction Signing',
      SEND_FROM: 'Send from',
      SEND_TO: 'Send to',
      AMOUNT: 'Amount',
    },
    LOGIN: {
      EMPTY_SEED: 'Please provide your seed/WIF and a 6 digit pin number below.',
      OR_WIF: 'or WIF',
      CREATE_A_PIN: 'Create a pin to Sign In.',
      SIGN_IN_TO_YOUR_ACC: 'Sign In to your Agama account.',
      SIGN_IN: 'Sign In',
      PIN_ACCESS: 'PIN access',
      WRONG_PIN: 'Wrong PIN!',
      LOGIN: 'Login',
      PASSPHRASE_ACCESS: 'Seed access',
      ENTER_PASSPHRASE: 'Enter a seed',
      OVERRIDE_PIN: 'Create / Override PIN',
      ENTER_6_DIGIT_PIN: 'Enter a PIN (min. 6 digits)',
      PIN_TOO_SHORT: 'PIN is too short!',
      I_CONFIRM_I_SAVED_SEED: 'I confirm that I saved the seed',
      PLEASE_MAKE_SURE_TO: 'Please make sure to write it down and store in a safe place!',
      THIS_IS_YOUR_NEW_SEED: 'This is your new seed',
      CONFIRMATION_REQUIRED: 'Confirmation is required',
    },
    SEND: {
      CURRENT_BALANCE: 'Current balance',
      BALANCE_AFTER_FEE: 'Balace after the fee',
      ERR_NOT_ENOUGH_ETH: 'Not enough ETH to send the transaction',
      ADJUSTED_AMOUNT: 'Adjusted amount',
      KMD_INTEREST: 'KMD rewards',
      TOTAL: 'Total',
      FEE: 'Fee',
      BTC_FEE_SLOW: 'Slow (60 min)',
      BTC_FEE_AVG: 'Average (30 min)',
      BTC_FEE_FAST: 'Fast (< 30 min)',
      BTC_FEES_FETCHING: 'Fetching BTC fees data...',
      BTC_FEES_FETCHING_FAILED: 'Failed to retrieve BTC fees data. Retrying in 5s...',
      ETH_FEE_SLOW: 'Slow (30 min)',
      ETH_FEE_AVG: 'Average (5 min)',
      ETH_FEE_FAST: 'Fast (< 2 min)',
      ETH_FEES_FETCHING: 'Fetching ETH fees data...',
      ETH_FEES_FETCHING_FAILED: 'Failed to retrieve ETH fees data. Retrying in 5s...',
      SUCCESS: 'Success',
      TXID: 'Transaction ID',
      OPEN_IN_EXPLORER: 'Open in explorer',
      ENTER_YOUR_PIN: 'Enter your PIN',
      SEND: 'Send',
      BACK: 'Back',
      SEND_FROM: 'Send from',
      SEND_TO: 'Send to',
      ENTER_AN_ADDRESS: 'Enter an address',
      AMOUNT: 'Amount',
      FILL_IN_DETAILS: 'Fill in details',
      CONFIRM: 'Confirm',
      TO: 'To',
      TO_SM: 'to',
      FROM: 'From',
      WARNING: 'Warning',
      WARNING_SPV_P1: 'your wallet data is verified only by a single server!',
      WARNING_SPV_P2: 'If you still want to continue press "Confirm".',
      SPV_VERIFYING: 'Verifying transaction data',
      TX_RESULT: 'Transaction result',
      KEY: 'Key',
      INFO: 'Info',
      RESULT: 'Result',
      SUCCESS: 'success',
      PROCESSING_SM: 'processing...',
      PROCESSING_TX: 'Processing transaction...',
      ERROR: 'Error',
      MAKE_ANOTHER_TX: 'Send another',
      NAN: 'Not a number',
      TOO_MUCH: 'Number is too big. Max. available amount is @template@',
      ADDRESS_IS_INCORECT: 'Address is incorrect',
      QR_SCAN_ERR: 'Unable to decode QR image. Please retry.',
      SCAN_QR: 'Scan QR code',
    },
    ADD_COIN: {
      NO_MATCHING_RESULTS: 'No matching results',
      QUICK_SEARCH: 'Type to search',
      ADD_ALL_COINS: 'Add all coins',
      SHORTCUTS: 'Shortcuts',
      MULTI_SELECT: 'Multi-select',
      ADD_SELECTED_COINS: 'Add selected coins',
    },
    BALANCE: {
      BALANCE: 'Balance',
      INTEREST: 'Rewards',
    },
    DASHBOARD: {
      MY: 'My',
      ADDRESS: 'address',
      TRANSACTIONS: 'Transactions',
      BACK: 'Back',
      LOGOUT: 'Logout',
      LOGIN: 'Login',
      LOCK: 'Lock',
      DASHBOARD: 'Dashboard',
      SEND: 'Send',
      RECEIVE: 'Receive',
      ADD_COIN: 'Add coin',
      CREATE_SEED: 'Create seed',
      CON_ERROR: 'Connection error. Please try another @template@ server.',
      SWITCH_SERVER: 'Switch server',
      ERROR_TESTING_SERVER: 'Error: server @template@ is unreachable!',
      CONNECTING_TO_NEW_SERVER: 'Connecting to a new server...',
      PROXY_ERROR: 'Proxy service is unreachable!',
      CLAIM: 'Claim',
      RETRY: 'Retry',
    },
    TRANSACTIONS: {
      LAST_TX: 'Last Transactions',
      LOADING_HISTORY: 'Loading transactions history',
      OUT: 'out',
      IN: 'in',
      MINE: 'mine',
      IMMATURE: 'immature',
      UNKNOWN: 'unknown',
      NO_HISTORY: 'No history',
      DIRECTION: 'Direction',
      CONFIRMATIONS: 'Confirmations',
      INTEREST: 'Rewards',
      TX_HASH: 'Tx hash',
      AMOUNT: 'Amount',
      TIME: 'Time',
    },
    CLAIM: {
      WARNING: 'Warning',
      WARNING_SPV_P1: 'your wallet data is verified only by a single server!',
      WARNING_SPV_P2: 'If you still want to continue press "Confirm".',
      SPV_VERIFYING: 'Verifying transaction data',
      CONFIRM: 'Confirm',
      CANCEL: 'Cancel',
      FAILED_TO_CLAIM_INTEREST: 'Failed to claim rewards! Please retry.',
      YOU_SUCCESFULLY_CLAIMED: 'You succesfully claimed',
      AMOUNT: 'Amount',
      INTEREST: 'Rewards',
      INTEREST_SM: 'rewards',
      LIST_SM: 'list',
      REQ_TO_CLAIM_P1: 'Requirements to accrue rewards',
      REQ_TO_CLAIM_P2: 'spend transaction was made at least 1 hour ago, locktime field is set and amount is greater than 10 KMD',
      CLAIM: 'Claim',
    },
    APP_TITLE: {
      MENU: 'Menu',
      PIN: 'Override PIN',
      LOGIN: 'Sign in',
      DASHBOARD: 'Dashboard',
      OVERVIEW: 'Overview',
      SETTINGS: 'Settings',
      RECOVERY: 'Recovery',
      SEND: 'Send',
      OFFLINESIG: 'Offline signing',
      ADDCOIN: 'Add coin',
      'CREATE-SEED': 'Create seed',
      CLAIM: 'Claim rewards',
    },
    SPV: {
      // asset chains
      BET: 'BET',
      BOTS: 'BOTS',
      CEAL: 'CEAL NET',
      COQUI: 'COQUI',
      CHAIN: 'Chainmakers',
      GLXT: 'GLXToken',
      EQL: 'Equaliser',
      CRYPTO: 'CRYPTO',
      HODL: 'HODL',
      DEX: 'DEX',
      JUMBLR: 'JUMBLR',
      KV: 'KV',
      MGW: 'MultiGateway',
      MVP: 'MVP Lineup',
      MNZ: 'Monaize',
      PANGEA: 'PANGEA',
      REVS: 'REVS',
      MSHARK: 'MSHARK',
      SHARK: 'SHARK',
      MESH: 'SpaceMesh',
      SUPERNET: 'SUPERNET',
      WLC: 'WIRELESS',
      AXO: 'AXO',
      ETOMIC: 'ETOMIC',
      BTCH: 'BTCH',
      BEER: 'BEER (Test coin)',
      PIZZA: 'PIZZA (Test coin)',
      VOTE2018: 'VOTE2018 (Notary Elections)',
      NINJA: 'NINJA',
      GLXT: 'GLXToken',
      BNTN: 'Blocnation',
      PRLPAY: 'Pearl Pay',
      OOT: 'Utrum',
      ZILLA: 'Chainzilla',
      VRSC: 'VerusCoin',
      CALL: 'Capital',
      CCL: 'CoinCollect',
      DION: 'DionPay',
      PGT: 'Pungo',
      KMDICE: 'KMDICE',
      MGNX: 'MagnaX',
      PTX: 'PatentTX',
      // crypto
      CRW: 'Crown',
      STRAT: 'Stratis',
      TOA: 'TOA',
      USC: 'UltimateSecureCash',
      VPN: 'VpnCoin',
      WC: 'WinCoin',
      NRG: 'Energi',
      ABY: 'ArtByte',
      VOT: 'VoteCoin',
      BDL: 'Bitdeal',
      BTCP: 'BitcoinPrivate',
      MAC: 'Machinecoin',
      XWC: 'Whitecoin',
      XVC: 'Vcash',
      SMART: 'Smartcash',
      CRAVE: 'Crave',
      ACC: 'AdCoin',
      AC: 'AsiaCoin',
      AUR: 'Auroracoin',
      BCA: 'Bitcoin Atom',
      CLAM: 'Clams',
      CLUB: 'ClubCoin',
      DMD: 'Diamond',
      EXCL: 'ExclusiveCoin',
      FTC: 'FeatherCoin',
      FLASH: 'Flash',
      NLG: 'Gulden',
      LCC: 'Litecoin Cash',
      MNX: 'MinexCoin',
      NAV: 'NavCoin',
      NEOS: 'NeosCoin',
      OK: 'OKCash',
      OMNI: 'OmniLayer',
      PIVX: 'Pivx',
      RDD: 'Reddcoin',
      UNO: 'Unobtanium',
      XVG: 'Verge',
      VIVO: 'VIVO',
      EFL: 'E-Gulden',
      GBX: 'GoByte',
      BSD: 'Bitsend',
      LBC: 'LBRY Credits',
      ERC: 'Europecoin',
      BATA: 'Bata',
      EMC2: 'Einsteinium',
      SYS: 'Syscoin',
      IOP: 'Internet of People',
      ZEN: 'Zencash',
      XZC: 'Zcoin',
      FJC: 'Fujicoin',
      GAME: 'GameCredits',
      BCBC: 'Bitcoin CBC',
      BTG: 'BitcoinGold',
      BCH: 'BitcoinCash',
      BTC: 'Bitcoin',
      DASH: 'Dash',
      DNR: 'Denarius',
      DGB: 'DigiByte',
      FAIR: 'Faircoin',
      ARG: 'Argentum',
      LTC: 'Litecoin',
      MONA: 'Monacoin',
      NMC: 'Namecoin',
      VTC: 'Vertcoin',
      VIA: 'Viacoin',
      SIB: 'Sibcoin',
      BLK: 'Blackcoin',
      DOGE: 'Dogecoin',
      ZEC: 'Zcash',
      HUSH: 'Hush',
      SNG: 'SnowGem',
      ZCL: 'Zclassic',
      XMY: 'Myriad',
      GRS: 'Groestlcoin',
      HODLC: 'Hodl coin',
      BTX: 'Bitcore',
      QTUM: 'Qtum',
      BTCZ: 'BitcoinZ',
      KMD: 'Komodo',
      CHIPS: 'Chips',
      MZC: 'Mazacoin',
      ZET: 'Zetacoin',
      SLR: 'Solarcoin',
      SMLY: 'Smileycoin',
      RBY: 'Rubycoin',
      VOX: 'RevolutionVR',
      PUT: 'PutinCoin',
      POT: 'Potcoin',
      POSW: 'Poswcoin',
      PINK: 'Pinkcoin',
      PSB: 'Pesobit',
      NSR: 'NuShares',
      NVC: 'Novacoin',
      NYC: 'NewYorkCoin',
      NRO: 'Neuro',
      LYNX: 'Lynx',
      LINX: 'Linx',
      LDCN: 'Landcoin',
      KOBO: 'Kobocoin',
      IXC: 'Ixcoin',
      INSN: 'InsaneCoin',
      THC: 'Hempcoin',
      HNC: 'Helleniccoin',
      GRC: 'Gridcoin',
      GCR: 'Global Currency Reserve',
      FRST: 'FirstCoin',
      ERC: 'Europecoin',
      EDRC: 'EDRcoin',
      ECN: 'eCoin',
      DGC: 'Digitalcoin',
      DEFC: 'Defcoin',
      CMP: 'CompCoin',
      CCN: 'Cannacoin',
      CDN: 'Canada eCoin',
      BRIT: 'BritCoin',
      XBC: 'BitcoinPlus',
      BELA: 'BelaCoin',
      USNBT: 'NuBits',
      ONX: 'Onixcoin',
      ZET: 'Zetacoin',
      JBS: 'Jumbucks',
      SLM: 'Slimcoin',
      AXE: 'Axe',
      PPC: 'Peercoin',
      MZC: 'Mazacoin',
      SDC: 'ShadowCash',
    },
    ETH: {
      // eth
      ETH: 'Ethereum',
      ETH_ROPSTEN: 'Ethereum (Ropsten)',
      AE: 'Aeternity',
      AION: 'Aion',
      ANN: 'Agent Not Needed',
      BFT: 'BnkToTheFuture',
      BIO: 'BioCrypt',
      BITSOKO: 'Bitsoko',
      BLZ: 'Bluzelle',
      BOX: 'Beonbox',
      BTCL: 'BTC Lite',
      BTM: 'Bytom',
      BTO: 'Bottos',
      CENNZ: 'Centrality',
      CMT: 'CyberMiles',
      CS: 'Credits',
      CYFR: 'CyphrCoin',
      DATA: 'Streamr DATAcoin',
      ELD: 'Electrum Dark',
      ENG: 'Enigma',
      ETA: 'Etheera',
      ETK: 'EnergiToken',
      FOOD: 'FoodCoin',
      GMBEL: 'G-Mbel',
      GPN: 'GPN Coin',
      GROW: 'Grow',
      GTC: 'Game.com',
      GTO: 'Gifto',
      HT: 'Huobi Token',
      HTS: 'Hostingicos',
      ITL: 'Italian Lira',
      JOI: 'JointEDU',
      KICK: 'KickCoin',
      LIKE: 'LikeCoin',
      LINK: 'ChainLink',
      LTR: 'Labtorum',
      LYS: 'Lightyears',
      MAN: 'Matrix AI Network',
      MMX: 'Mechanix Token',
      MRPH: 'Morpheus Network',
      MTF: 'MintFlint Token',
      MYB: 'MyBit Token',
      NOAH: 'Noah Coin',
      NPXS: 'Pundi X',
      NS21: 'PeachCoin',
      NULS: 'Nuls',
      OCC: 'Original Crypto Coin',
      PAO: 'Pacific Ocean',
      PCL: 'Peculium',
      PCNC: 'PCN Coin',
      PEP: 'PesaPepe',
      PGT: 'Puregold Token',
      POLY: 'Polymath',
      PURC: 'Peurcoin',
      QBIT: 'Qubitica',
      QKC: 'QuarkChain',
      RUFF: 'Ruff',
      RVT: 'Rivetz',
      SPANK: 'SpankChain',
      STRM41: 'Stream41',
      SUB: 'Substratum',
      SVD: 'Savedroid',
      THETA: 'Theta Token',
      TRAT: 'Tratok',
      CIX: 'Cryptonetix',
      DCN: 'Dentacoin',
      ELY: 'Elysian',
      DROP: 'Dropil',
      DRT: 'DomRaider',
      ELF: 'aelf',
      RLTY: 'SMARTRealty',
      PXT: 'Populous XBRL Token',
      STORM: 'Storm',
      TUSD: 'TrueUSD',
      WAX: 'WAX',
      KIN: 'Kin',
      LALA: 'LALA World',
      ONNI: 'Misericordae',
      PAT: 'Pangea Arbitration Token',
      USDT: 'Tether',
      BBT: 'Bitboost',
      OCT: 'Octus',
      OMG: 'OmiseGo',
      R: 'Revain',
      UCASH: 'U.CASH',
      ICX: 'ICON',
      BNB: 'Binance Coin',
      BTK: 'BitcoinToken',
      DAI: 'Dai',
      DDD: 'Scry.info',
      DGD: 'DigixDAO',
      DGPT: 'DigiPulse',
      DRGN: 'Dragonchain',
      FLLW: 'FollowCoin',
      FSN: 'Fusion',
      HYD: 'Hydra',
      IOST: 'IOST',
      PPT: 'Populous',
      LRC: 'Loopring',
      MDS: 'MediShares',
      MKR: 'Maker',
      SNT: 'Status',
      REP: 'Augur',
      SRN: 'SIRIN LABS Token',
      YLC: 'YoloCash',
      ZRX: '0x',
      BAT: 'Basic Attention Token',
      ETHOS: 'Ethos',
      QASH: 'Qash',
      FUN: 'FunFair',
      KNC: 'Kyber Network',
      SALT: 'Salt',
      BNT: 'Bancor',
      ICN: 'Iconomi',
      LUPX: 'Lupecoin',
      NAS: 'Nebulas',
      PAY: 'TenX',
      REQ: 'Request Network',
      STORJ: 'Storj',
      STWY: 'StorweeyToken',
      GNO: 'Gnosis',
      RLC: 'iExec RLC',
      ENJ: 'Enjin Coin',
      QSP: 'Quantstamp',
      RDN: 'Raiden Network Token',
      WTC: 'Waltonchain',
      CVC: 'Civic',
      SAN: 'Santiment',
      ANT: 'Aragon',
      LOOM: 'Loom Network',
      MANA: 'Decentraland',
      MCO: 'Monaco',
      MGO: 'MobileGo',
      MTL: 'Metal',
      EDG: 'Edgeless',
      MLN: 'Melon',
      AMB: 'Ambrosus',
      WINGS: 'Wings',
      POWR: 'Power Ledger',
      PRL: 'Oyster',
      RHOC: 'RChain',
      RCN: 'Ripio Credit Network',
      SANC: 'Sancoj',
      SNGLS: 'SingularDTV',
      TAAS: 'TaaS',
      DNT: 'District0x',
      CFI: 'Cofound.it',
      LUN: 'Lunyr',
      ADT: 'adToken',
      AST: 'AirSwap',
      CDT: 'Blox',
      TKN: 'TokenCard',
      HMQ: 'Humaniq',
      BCAP: 'Bcap',
      NMR: 'Numeraire',
      NET: 'Nimiq',
      TRST: 'Trust',
      GUP: 'Matchpool',
      '1ST': 'FirstBlood',
      TIME: 'Chronobank',
      SWT: 'Swarm City',
      VEN: 'VeChain',
      DICE: 'Etheroll',
      XAUR: 'Xarum',
      XOV: 'XOVBank',
      PLU: 'Pluton',
      HGT: 'HelloGold',
      VSL: 'vSlice',
      IND: 'Indorse Token',
      FYN: 'FundYourselfNow',
      EOS: 'EOS',
      ZIL: 'Zilliqa',
      OCALL: 'Old Capital',
      CALLG: 'Capital GAS',
    },
  },
};

export default lang;