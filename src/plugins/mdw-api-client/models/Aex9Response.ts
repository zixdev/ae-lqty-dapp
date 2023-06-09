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
 * Response Schema for AEX9 contract
 * @export
 * @interface Aex9Response
 */
export interface Aex9Response {
    /**
     * The number of decimals for AEX9 token
     * @type {number}
     * @memberof Aex9Response
     */
    decimals: number;
    /**
     * Extensions implemnted by the contract
     * @type {Array<string>}
     * @memberof Aex9Response
     */
    extensions?: Array<string>;
    /**
     * Count of accounts having balance
     * @type {number}
     * @memberof Aex9Response
     */
    holders?: number;
    /**
     * The name of AEX9 token
     * @type {string}
     * @memberof Aex9Response
     */
    name: string;
    /**
     * The symbol of AEX9 token
     * @type {string}
     * @memberof Aex9Response
     */
    symbol: string;
    /**
     * The transaction index of contract create transction
     * @type {number}
     * @memberof Aex9Response
     */
    txi: number;
}

/**
 * Check if a given object implements the Aex9Response interface.
 */
export function instanceOfAex9Response(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "decimals" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "symbol" in value;
    isInstance = isInstance && "txi" in value;

    return isInstance;
}

export function Aex9ResponseFromJSON(json: any): Aex9Response {
    return Aex9ResponseFromJSONTyped(json, false);
}

export function Aex9ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Aex9Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'decimals': json['decimals'],
        'extensions': !exists(json, 'extensions') ? undefined : json['extensions'],
        'holders': !exists(json, 'holders') ? undefined : json['holders'],
        'name': json['name'],
        'symbol': json['symbol'],
        'txi': json['txi'],
    };
}

export function Aex9ResponseToJSON(value?: Aex9Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'decimals': value.decimals,
        'extensions': value.extensions,
        'holders': value.holders,
        'name': value.name,
        'symbol': value.symbol,
        'txi': value.txi,
    };
}

