import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum Blockchain {
  ETHEREUM = 1,
  BINANCE_SMART_CHAIN = 2,
  KAVA = 2222
}

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  BSC_MAINNET = 56,
  BSC_TESTNET = 97,
  KAVA = 2222,
  CORE = 1116,
  CANTO = 7700,
  AETH = 42161,
  POM = 18159,
  OP = 10,
  MATIC = 137,
  FTM = 250,
  HARMONY_TESTNET = 1666700000
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.ROPSTEN]: '0x0000000000000000000000000000000000000001',
  [ChainId.RINKEBY]: '0x0000000000000000000000000000000000000001',
  [ChainId.GÖRLI]: '0x0000000000000000000000000000000000000001',
  [ChainId.KOVAN]: '0x0000000000000000000000000000000000000001',
  [ChainId.BSC_MAINNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.BSC_TESTNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.KAVA]: '0x0000000000000000000000000000000000000001',
  [ChainId.CORE]: '0x0000000000000000000000000000000000000001',
  [ChainId.CANTO]: '0x0000000000000000000000000000000000000001',
  [ChainId.AETH]: '0x0000000000000000000000000000000000000001',
  [ChainId.POM]: '0x0000000000000000000000000000000000000001',
  [ChainId.OP]: '0x0000000000000000000000000000000000000001',
  [ChainId.MATIC]: '0x0000000000000000000000000000000000000001',
  [ChainId.FTM]: '0x0000000000000000000000000000000000000001',
  [ChainId.HARMONY_TESTNET]: '0x0000000000000000000000000000000000000001'
}

export const INIT_CODE_HASH = '0x8455b0f8e468580a0ae3f8afe8b676f72e1a9d93425122526501153d3647ea6f'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
