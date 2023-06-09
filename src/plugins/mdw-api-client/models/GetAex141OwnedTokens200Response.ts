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
import type { Aex141OwnedTokenResponse } from './Aex141OwnedTokenResponse';
import {
    Aex141OwnedTokenResponseFromJSON,
    Aex141OwnedTokenResponseFromJSONTyped,
    Aex141OwnedTokenResponseToJSON,
} from './Aex141OwnedTokenResponse';

/**
 * 
 * @export
 * @interface GetAex141OwnedTokens200Response
 */
export interface GetAex141OwnedTokens200Response {
    /**
     * 
     * @type {Array<Aex141OwnedTokenResponse>}
     * @memberof GetAex141OwnedTokens200Response
     */
    data?: Array<Aex141OwnedTokenResponse>;
    /**
     * 
     * @type {string}
     * @memberof GetAex141OwnedTokens200Response
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetAex141OwnedTokens200Response
     */
    prev?: string | null;
}

/**
 * Check if a given object implements the GetAex141OwnedTokens200Response interface.
 */
export function instanceOfGetAex141OwnedTokens200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetAex141OwnedTokens200ResponseFromJSON(json: any): GetAex141OwnedTokens200Response {
    return GetAex141OwnedTokens200ResponseFromJSONTyped(json, false);
}

export function GetAex141OwnedTokens200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAex141OwnedTokens200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(Aex141OwnedTokenResponseFromJSON)),
        'next': !exists(json, 'next') ? undefined : json['next'],
        'prev': !exists(json, 'prev') ? undefined : json['prev'],
    };
}

export function GetAex141OwnedTokens200ResponseToJSON(value?: GetAex141OwnedTokens200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(Aex141OwnedTokenResponseToJSON)),
        'next': value.next,
        'prev': value.prev,
    };
}

