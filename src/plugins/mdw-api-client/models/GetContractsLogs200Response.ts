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
import type { ContractLog } from './ContractLog';
import {
    ContractLogFromJSON,
    ContractLogFromJSONTyped,
    ContractLogToJSON,
} from './ContractLog';

/**
 * 
 * @export
 * @interface GetContractsLogs200Response
 */
export interface GetContractsLogs200Response {
    /**
     * 
     * @type {Array<ContractLog>}
     * @memberof GetContractsLogs200Response
     */
    data?: Array<ContractLog>;
    /**
     * 
     * @type {string}
     * @memberof GetContractsLogs200Response
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetContractsLogs200Response
     */
    prev?: string | null;
}

/**
 * Check if a given object implements the GetContractsLogs200Response interface.
 */
export function instanceOfGetContractsLogs200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetContractsLogs200ResponseFromJSON(json: any): GetContractsLogs200Response {
    return GetContractsLogs200ResponseFromJSONTyped(json, false);
}

export function GetContractsLogs200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetContractsLogs200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(ContractLogFromJSON)),
        'next': !exists(json, 'next') ? undefined : json['next'],
        'prev': !exists(json, 'prev') ? undefined : json['prev'],
    };
}

export function GetContractsLogs200ResponseToJSON(value?: GetContractsLogs200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(ContractLogToJSON)),
        'next': value.next,
        'prev': value.prev,
    };
}

