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
 * Response Schema for templates of a AEX-141 contract
 * @export
 * @interface Aex141TemplatesResponse
 */
export interface Aex141TemplatesResponse {
    /**
     * NFT contract id
     * @type {string}
     * @memberof Aex141TemplatesResponse
     */
    contractId: string;
    /**
     * Template edition details
     * @type {object}
     * @memberof Aex141TemplatesResponse
     */
    edition?: object;
    /**
     * Log index of the TemplateCreation
     * @type {number}
     * @memberof Aex141TemplatesResponse
     */
    logIdx: number;
    /**
     * Template id of AEX-141 tokens
     * @type {number}
     * @memberof Aex141TemplatesResponse
     */
    templateId: number;
    /**
     * Transaction hash of the TemplateCreation
     * @type {string}
     * @memberof Aex141TemplatesResponse
     */
    txHash: string;
}

/**
 * Check if a given object implements the Aex141TemplatesResponse interface.
 */
export function instanceOfAex141TemplatesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "contractId" in value;
    isInstance = isInstance && "logIdx" in value;
    isInstance = isInstance && "templateId" in value;
    isInstance = isInstance && "txHash" in value;

    return isInstance;
}

export function Aex141TemplatesResponseFromJSON(json: any): Aex141TemplatesResponse {
    return Aex141TemplatesResponseFromJSONTyped(json, false);
}

export function Aex141TemplatesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): Aex141TemplatesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contractId': json['contract_id'],
        'edition': !exists(json, 'edition') ? undefined : json['edition'],
        'logIdx': json['log_idx'],
        'templateId': json['template_id'],
        'txHash': json['tx_hash'],
    };
}

export function Aex141TemplatesResponseToJSON(value?: Aex141TemplatesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contract_id': value.contractId,
        'edition': value.edition,
        'log_idx': value.logIdx,
        'template_id': value.templateId,
        'tx_hash': value.txHash,
    };
}

