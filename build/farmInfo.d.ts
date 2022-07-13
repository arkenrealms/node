export declare const CURRENT_FARM_SYMBOL = "GUL";
export interface Address {
    97?: string;
    56: string;
}
export declare enum QuoteToken {
    'BNB' = "BNB",
    'RUNE' = "RUNE",
    'EL' = "EL",
    'ELD' = "ELD",
    'TIR' = "TIR",
    'NEF' = "NEF",
    'ITH' = "ITH",
    'TAL' = "TAL",
    'RAL' = "RAL",
    'ORT' = "ORT",
    'THUL' = "THUL",
    'AMN' = "AMN",
    'SOL' = "SOL",
    'SHAEL' = "SHAEL",
    'DOL' = "DOL",
    'HEL' = "HEL",
    'IO' = "IO",
    'LUM' = "LUM",
    'KO' = "KO",
    'FAL' = "FAL",
    'LEM' = "LEM",
    'UM' = "UM",
    'PUL' = "PUL",
    'MAL' = "MAL",
    'IST' = "IST",
    'GUL' = "GUL",
    'VEX' = "VEX",
    'OHM' = "OHM",
    'LO' = "LO",
    'SUR' = "SUR",
    'BER' = "BER",
    'JAH' = "JAH",
    'CHAM' = "CHAM",
    'ZOD' = "ZOD",
    'BUSD' = "BUSD",
    'USDC' = "USDC",
    'BTCB' = "BTCB",
    'ETH' = "ETH"
}
export interface FarmConfig {
    pid: number;
    fid: number;
    risk?: number;
    chefKey?: string;
    inactive?: boolean;
    isTokenOnly?: boolean;
    isFinished?: boolean;
    isStarting?: boolean;
    poolWeight?: number;
    depositFeeBP?: number;
    lpSymbol: string;
    isHiddenPool?: boolean;
    tokenLpAddresses?: Address;
    lpAddresses: Address;
    tokenSymbol: string;
    tokenAddresses: Address;
    quoteTokenSymbol: QuoteToken;
    quoteTokenAdresses: Address;
    multiplier?: string;
    isCommunity?: boolean;
    isRetired?: boolean;
    dual?: {
        rewardPerBlock: number;
        earnLabel: string;
        endBlock: number;
    };
}
export declare const MAINNET = 56;
export declare const TESTNET = 97;
export declare const farms: FarmConfig[];
export default farms;
