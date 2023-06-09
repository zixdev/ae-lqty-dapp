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
 * 
 * @export
 * @interface NameInfoPointers
 */
export interface NameInfoPointers {
    /**
     * 
     * @type {string}
     * @memberof NameInfoPointers
     */
    accountPubkey?: string;
}

/**
 * Check if a given object implements the NameInfoPointers interface.
 */
export function instanceOfNameInfoPointers(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NameInfoPointersFromJSON(json: any): NameInfoPointers {
    return NameInfoPointersFromJSONTyped(json, false);
}

export function NameInfoPointersFromJSONTyped(json: any, ignoreDiscriminator: boolean): NameInfoPointers {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountPubkey': !exists(json, 'account_pubkey') ? undefined : json['account_pubkey'],
    };
}

export function NameInfoPointersToJSON(value?: NameInfoPointers | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_pubkey': value.accountPubkey,
    };
}

