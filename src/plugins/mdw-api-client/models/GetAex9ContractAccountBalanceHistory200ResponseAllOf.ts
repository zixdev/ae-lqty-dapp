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
import type { Aex9BalanceResponse } from './Aex9BalanceResponse';
import {
    Aex9BalanceResponseFromJSON,
    Aex9BalanceResponseFromJSONTyped,
    Aex9BalanceResponseToJSON,
} from './Aex9BalanceResponse';

/**
 * 
 * @export
 * @interface GetAex9ContractAccountBalanceHistory200ResponseAllOf
 */
export interface GetAex9ContractAccountBalanceHistory200ResponseAllOf {
    /**
     * 
     * @type {Array<Aex9BalanceResponse>}
     * @memberof GetAex9ContractAccountBalanceHistory200ResponseAllOf
     */
    data?: Array<Aex9BalanceResponse>;
}

/**
 * Check if a given object implements the GetAex9ContractAccountBalanceHistory200ResponseAllOf interface.
 */
export function instanceOfGetAex9ContractAccountBalanceHistory200ResponseAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetAex9ContractAccountBalanceHistory200ResponseAllOfFromJSON(json: any): GetAex9ContractAccountBalanceHistory200ResponseAllOf {
    return GetAex9ContractAccountBalanceHistory200ResponseAllOfFromJSONTyped(json, false);
}

export function GetAex9ContractAccountBalanceHistory200ResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAex9ContractAccountBalanceHistory200ResponseAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(Aex9BalanceResponseFromJSON)),
    };
}

export function GetAex9ContractAccountBalanceHistory200ResponseAllOfToJSON(value?: GetAex9ContractAccountBalanceHistory200ResponseAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(Aex9BalanceResponseToJSON)),
    };
}
