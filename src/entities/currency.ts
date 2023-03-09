import JSBI from 'jsbi'

import { SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * The ETHER instance of the base class `Currency`.
   */
  public static readonly ETHER: Currency = new Currency(18, 'ETH', 'Ether')

  /**
   * The NOVA instance of the base class `Currency`.
   */
  public static readonly KAVA: Currency = new Currency(18, 'ETH', 'Ether')

  /**
   * The NOVA instance of the base class `Currency`.
   */
  public static readonly CORE: Currency = new Currency(18, 'ETH', 'Ether')

  /**
   * The NOVA instance of the base class `Currency`.
   */
  public static readonly CANTO: Currency = new Currency(18, 'ETH', 'Ether')

  /**
   * The NOVA instance of the base class `Currency`.
   */
  public static readonly AETH: Currency = new Currency(18, 'ETH', 'Ether')

  /**
   * The NOVA instance of the base class `Currency`.
   */
  public static readonly POM: Currency = new Currency(18, 'ETH', 'Ether')

  /**
   * The NOVA instance of the base class `Currency`.
   */
  public static readonly OP: Currency = new Currency(18, 'ETH', 'Ether')

  /**
   * The NOVA instance of the base class `Currency`.
   */
  public static readonly MATIC: Currency = new Currency(18, 'ETH', 'Ether')

  /**
   * The NOVA instance of the base class `Currency`.
   */
  public static readonly FTM: Currency = new Currency(18, 'ETH', 'Ether')

  /**
   * The BINANCE_COIN instance of the base class `Currency`.
   */
  public static readonly BINANCE_COIN: Currency = new Currency(18, 'BNB', 'Binance Coin')

  /**
   * Constructs an instance of the base class `Currency`. The only instance of the base class `Currency` is `Currency.ETHER`.
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }
}

const ETHER = Currency.ETHER
const KAVA = Currency.KAVA
const CORE = Currency.CORE
const CANTO = Currency.CANTO
const AETH = Currency.AETH
const POM = Currency.POM
const OP = Currency.OP
const MATIC = Currency.MATIC
const FTM = Currency.FTM
const BINANCE_COIN = Currency.BINANCE_COIN
const DEFAULT_CURRENCIES = [ETHER, NOVA, BINANCE_COIN]

export { ETHER, KAVA, CORE, CANTO, AETH, POM, OP, MATIC, FTM, BINANCE_COIN, DEFAULT_CURRENCIES }
