import _Web3 from 'web3';
import HDWalletProvider from "@truffle/hdwallet-provider";
export declare const Web3: typeof _Web3;
export declare const getRandomProvider: (secret: any) => HDWalletProvider;
export declare function iterateBlocks(app: any, name: any, address: any, fromBlock: any, toBlock: any, event: any, processLog: any, updateConfig: any): Promise<void>;
export declare const getAddress: (address: any) => any;
export declare function isValidRequest(web3: any, req: any): boolean;
export declare function getSignedRequest(web3: any, secret: any, data: any): Promise<{
    address: any;
    hash: any;
    data: any;
}>;
export declare function getTopicSignatureHex(web3: any, topicSignature: any): any;
