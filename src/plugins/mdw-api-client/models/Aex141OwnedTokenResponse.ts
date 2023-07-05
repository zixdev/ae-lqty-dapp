/* tslint:disable */
/* eslint-disable */
/**
 * Aeternity Middleware
 * API for [Aeternity Middleware](https://github.com/aeternity/ae_mdw)
 *
 * The version of the OpenAPI document: 1.51.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Response Schema for owners of AEX-141 tokens
 * @export
 * @interface Aex141OwnedTokenResponse
 */
export interface Aex141OwnedTokenResponse {
    /**
     * Account id
     * @type {string}
     * @memberof Aex141OwnedTokenResponse
     */
    accountId: string;
    /**
     * NFT contract id
     * @type {string}
     * @memberof Aex141OwnedTokenResponse
     */
    contractId: string;
    /**
     * Non-fungible token id
     * @type {number}
     * @memberof Aex141OwnedTokenResponse
     */
    tokenId: number;
}

/**
 * Check if a given object implements the Aex141OwnedTokenResponse interface.
 */
export function instanceOfAex141OwnedTokenResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accountId" in value;
    isInstance = isInstance && "contractId" in value;
    isInstance = isInstance && "tokenId" in value;

    return isInstance;
}

export function Aex141OwnedTokenResponseFromJSON(json: any): Aex141OwnedTokenResponse {
    return Aex141OwnedTokenResponseFromJSONTyped(json, false);
}

export function Aex141OwnedTokenResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Aex141OwnedTokenResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': json['account_id'],
        'contractId': json['contract_id'],
        'tokenId': json['token_id'],
    };
}

export function Aex141OwnedTokenResponseToJSON(value?: Aex141OwnedTokenResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_id': value.accountId,
        'contract_id': value.contractId,
        'token_id': value.tokenId,
    };
}
