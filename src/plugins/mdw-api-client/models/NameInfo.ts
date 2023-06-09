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
import type { NameInfoOwnership } from './NameInfoOwnership';
import {
    NameInfoOwnershipFromJSON,
    NameInfoOwnershipFromJSONTyped,
    NameInfoOwnershipToJSON,
} from './NameInfoOwnership';
import type { NameInfoPointers } from './NameInfoPointers';
import {
    NameInfoPointersFromJSON,
    NameInfoPointersFromJSONTyped,
    NameInfoPointersToJSON,
} from './NameInfoPointers';

/**
 * 
 * @export
 * @interface NameInfo
 */
export interface NameInfo {
    /**
     * 
     * @type {number}
     * @memberof NameInfo
     */
    activeFrom?: number;
    /**
     * 
     * @type {Array<number>}
     * @memberof NameInfo
     */
    claims?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof NameInfo
     */
    expireHeight?: number;
    /**
     * 
     * @type {NameInfoOwnership}
     * @memberof NameInfo
     */
    ownership?: NameInfoOwnership;
    /**
     * 
     * @type {NameInfoPointers}
     * @memberof NameInfo
     */
    pointers?: NameInfoPointers;
    /**
     * 
     * @type {Array<number>}
     * @memberof NameInfo
     */
    transfers?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof NameInfo
     */
    updates?: Array<number>;
}

/**
 * Check if a given object implements the NameInfo interface.
 */
export function instanceOfNameInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NameInfoFromJSON(json: any): NameInfo {
    return NameInfoFromJSONTyped(json, false);
}

export function NameInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): NameInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activeFrom': !exists(json, 'active_from') ? undefined : json['active_from'],
        'claims': !exists(json, 'claims') ? undefined : json['claims'],
        'expireHeight': !exists(json, 'expire_height') ? undefined : json['expire_height'],
        'ownership': !exists(json, 'ownership') ? undefined : NameInfoOwnershipFromJSON(json['ownership']),
        'pointers': !exists(json, 'pointers') ? undefined : NameInfoPointersFromJSON(json['pointers']),
        'transfers': !exists(json, 'transfers') ? undefined : json['transfers'],
        'updates': !exists(json, 'updates') ? undefined : json['updates'],
    };
}

export function NameInfoToJSON(value?: NameInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active_from': value.activeFrom,
        'claims': value.claims,
        'expire_height': value.expireHeight,
        'ownership': NameInfoOwnershipToJSON(value.ownership),
        'pointers': NameInfoPointersToJSON(value.pointers),
        'transfers': value.transfers,
        'updates': value.updates,
    };
}

