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
import type { Aex141TemplateTokensResponse } from './Aex141TemplateTokensResponse';
import {
    Aex141TemplateTokensResponseFromJSON,
    Aex141TemplateTokensResponseFromJSONTyped,
    Aex141TemplateTokensResponseToJSON,
} from './Aex141TemplateTokensResponse';

/**
 * 
 * @export
 * @interface GetAex141TemplateTokens200Response
 */
export interface GetAex141TemplateTokens200Response {
    /**
     * 
     * @type {Array<Aex141TemplateTokensResponse>}
     * @memberof GetAex141TemplateTokens200Response
     */
    data?: Array<Aex141TemplateTokensResponse>;
    /**
     * 
     * @type {string}
     * @memberof GetAex141TemplateTokens200Response
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetAex141TemplateTokens200Response
     */
    prev?: string | null;
}

/**
 * Check if a given object implements the GetAex141TemplateTokens200Response interface.
 */
export function instanceOfGetAex141TemplateTokens200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetAex141TemplateTokens200ResponseFromJSON(json: any): GetAex141TemplateTokens200Response {
    return GetAex141TemplateTokens200ResponseFromJSONTyped(json, false);
}

export function GetAex141TemplateTokens200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAex141TemplateTokens200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(Aex141TemplateTokensResponseFromJSON)),
        'next': !exists(json, 'next') ? undefined : json['next'],
        'prev': !exists(json, 'prev') ? undefined : json['prev'],
    };
}

export function GetAex141TemplateTokens200ResponseToJSON(value?: GetAex141TemplateTokens200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(Aex141TemplateTokensResponseToJSON)),
        'next': value.next,
        'prev': value.prev,
    };
}

