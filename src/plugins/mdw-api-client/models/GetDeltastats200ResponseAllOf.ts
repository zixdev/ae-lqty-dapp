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
import type { DeltaStat } from './DeltaStat';
import {
    DeltaStatFromJSON,
    DeltaStatFromJSONTyped,
    DeltaStatToJSON,
} from './DeltaStat';

/**
 * 
 * @export
 * @interface GetDeltastats200ResponseAllOf
 */
export interface GetDeltastats200ResponseAllOf {
    /**
     * 
     * @type {Array<DeltaStat>}
     * @memberof GetDeltastats200ResponseAllOf
     */
    data?: Array<DeltaStat>;
}

/**
 * Check if a given object implements the GetDeltastats200ResponseAllOf interface.
 */
export function instanceOfGetDeltastats200ResponseAllOf(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetDeltastats200ResponseAllOfFromJSON(json: any): GetDeltastats200ResponseAllOf {
    return GetDeltastats200ResponseAllOfFromJSONTyped(json, false);
}

export function GetDeltastats200ResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetDeltastats200ResponseAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(DeltaStatFromJSON)),
    };
}

export function GetDeltastats200ResponseAllOfToJSON(value?: GetDeltastats200ResponseAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(DeltaStatToJSON)),
    };
}

