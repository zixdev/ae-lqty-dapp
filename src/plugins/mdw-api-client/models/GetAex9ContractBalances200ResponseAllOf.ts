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
import type { Aex9ContractBalanceResponse } from './Aex9ContractBalanceResponse';
import {
    Aex9ContractBalanceResponseFromJSON,
    Aex9ContractBalanceResponseFromJSONTyped,
    Aex9ContractBalanceResponseToJSON,
} from './Aex9ContractBalanceResponse';

/**
 * 
 * @export
 * @interface GetAex9ContractBalances200ResponseAllOf
 */
export interface GetAex9ContractBalances200ResponseAllOf {
    /**
     * 
     * @type {Array<Aex9ContractBalanceResponse>}
     * @memberof GetAex9ContractBalances200ResponseAllOf
     */
    data?: Array<Aex9ContractBalanceResponse>;
}

/**
 * Check if a given object implements the GetAex9ContractBalances200ResponseAllOf interface.
 */
export function instanceOfGetAex9ContractBalances200ResponseAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetAex9ContractBalances200ResponseAllOfFromJSON(json: any): GetAex9ContractBalances200ResponseAllOf {
    return GetAex9ContractBalances200ResponseAllOfFromJSONTyped(json, false);
}

export function GetAex9ContractBalances200ResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAex9ContractBalances200ResponseAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(Aex9ContractBalanceResponseFromJSON)),
    };
}

export function GetAex9ContractBalances200ResponseAllOfToJSON(value?: GetAex9ContractBalances200ResponseAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(Aex9ContractBalanceResponseToJSON)),
    };
}
