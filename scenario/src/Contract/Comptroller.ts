import {Contract} from '../Contract';
import {Callable, Sendable} from '../Invokation';
import {encodedNumber} from '../Encoding';

interface ComptrollerMethods {
  getAccountLiquidity(string): Callable<{0: number, 1: number, 2: number}>
  getHypotheticalAccountLiquidity(account: string, asset: string, redeemTokens: encodedNumber, borrowAmount: encodedNumber): Callable<{0: number, 1: number, 2: number}>
  membershipLength(string): Callable<string>
  checkMembership(user: string, aToken: string): Callable<string>
  getAssetsIn(string): Callable<string[]>
  admin(): Callable<string>
  oracle(): Callable<string>
  maxAssets(): Callable<number>
  liquidationIncentiveMantissa(): Callable<number>
  closeFactorMantissa(): Callable<number>
  getBlockNumber(): Callable<number>
  collateralFactor(string): Callable<string>
  markets(string): Callable<{0: boolean, 1: number, 2?: boolean}>
  _setMintPaused(bool): Sendable<number>
  _setMaxAssets(encodedNumber): Sendable<number>
  _setLiquidationIncentive(encodedNumber): Sendable<number>
  _supportMarket(string): Sendable<number>
  _setPriceOracle(string): Sendable<number>
  _setCollateralFactor(string, encodedNumber): Sendable<number>
  _setCloseFactor(encodedNumber): Sendable<number>
  enterMarkets(markets: string[]): Sendable<number>
  exitMarket(market: string): Sendable<number>
  fastForward(encodedNumber): Sendable<number>
  _setPendingImplementation(string): Sendable<number>
  comptrollerImplementation(): Callable<string>
  unlist(string): Sendable<void>
  admin(): Callable<string>
  pendingAdmin(): Callable<string>
  _setPendingAdmin(string): Sendable<number>
  _acceptAdmin(): Sendable<number>
  _setPauseGuardian(string): Sendable<number>
  pauseGuardian(): Callable<string>
  _setMintPaused(market: string, string): Sendable<number>
  _setBorrowPaused(market: string, string): Sendable<number>
  _setTransferPaused(string): Sendable<number>
  _setSeizePaused(string): Sendable<number>
  _mintGuardianPaused(): Callable<boolean>
  _borrowGuardianPaused(): Callable<boolean>
  transferGuardianPaused(): Callable<boolean>
  seizeGuardianPaused(): Callable<boolean>
  mintGuardianPaused(market: string): Callable<boolean>
  borrowGuardianPaused(market: string): Callable<boolean>
  _addAtlantisMarkets(markets: string[]): Sendable<void>
  _dropAtlantisMarket(market: string): Sendable<void>
  getAtlantisMarkets(): Callable<string[]>
  refreshAtlantisSpeeds(): Sendable<void>
  atlantisRate(): Callable<number>
  atlantisSupplyState(string): Callable<string>
  atlantisBorrowState(string): Callable<string>
  atlantisAccrued(string): Callable<string>
  atlantisSupplierIndex(market: string, account: string): Callable<string>
  atlantisBorrowerIndex(market: string, account: string): Callable<string>
  atlantisSpeeds(string): Callable<string>
  claimAtlantis(string): Sendable<void>
  updateContributorRewards(account: string): Sendable<void>
  _grantAtlantis(account: string, encodedNumber): Sendable<void>
  _setAtlantisRate(encodedNumber): Sendable<void>
  _setAtlantisSpeed(aToken: string, encodedNumber): Sendable<void>
  _setContributorAtlantisSpeed(account: string, encodedNumber): Sendable<void>
  _setMarketBorrowCaps(aTokens:string[], borrowCaps:encodedNumber[]): Sendable<void>
  _setBorrowCapGuardian(string): Sendable<void>
  borrowCapGuardian(): Callable<string>
  borrowCaps(string): Callable<string>
  isDeprecated(aToken: string): Callable<string>
}

export interface Comptroller extends Contract {
  methods: ComptrollerMethods
}
