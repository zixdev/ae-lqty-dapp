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
 * Contract call made inside of a contract call or contract create transaction
 * @export
 * @interface InternalContractCallEvent
 */
export interface InternalContractCallEvent {
    /**
     * The micro block hash in which the transaction happened
     * @type {string}
     * @memberof InternalContractCallEvent
     */
    blockHash: string;
    /**
     * The contract call transaction hash
     * @type {string}
     * @memberof InternalContractCallEvent
     */
    callTxHash?: string;
    /**
     * The contract pubkey
     * @type {string}
     * @memberof InternalContractCallEvent
     */
    contractId: string;
    /**
     * The contract creation transaction hash
     * @type {string}
     * @memberof InternalContractCallEvent
     */
    contractTxHash: string;
    /**
     * The name of the function
     * @type {string}
     * @memberof InternalContractCallEvent
     */
    _function: string;
    /**
     * The height in which the internal call happened
     * @type {number}
     * @memberof InternalContractCallEvent
     */
    height: number;
    /**
     * The transaction object
     * @type {object}
     * @memberof InternalContractCallEvent
     */
    internalTx: object;
    /**
     * The micro block index
     * @type {number}
     * @memberof InternalContractCallEvent
     */
    microIndex: number;
}

/**
 * Check if a given object implements the InternalContractCallEvent interface.
 */
export function instanceOfInternalContractCallEvent(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "blockHash" in value;
    isInstance = isInstance && "contractId" in value;
    isInstance = isInstance && "contractTxHash" in value;
    isInstance = isInstance && "_function" in value;
    isInstance = isInstance && "height" in value;
    isInstance = isInstance && "internalTx" in value;
    isInstance = isInstance && "microIndex" in value;

    return isInstance;
}

export function InternalContractCallEventFromJSON(json: any): InternalContractCallEvent {
    return InternalContractCallEventFromJSONTyped(json, false);
}

export function InternalContractCallEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternalContractCallEvent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockHash': json['block_hash'],
        'callTxHash': !exists(json, 'call_tx_hash') ? undefined : json['call_tx_hash'],
        'contractId': json['contract_id'],
        'contractTxHash': json['contract_tx_hash'],
        '_function': json['function'],
        'height': json['height'],
        'internalTx': json['internal_tx'],
        'microIndex': json['micro_index'],
    };
}

export function InternalContractCallEventToJSON(value?: InternalContractCallEvent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'block_hash': value.blockHash,
        'call_tx_hash': value.callTxHash,
        'contract_id': value.contractId,
        'contract_tx_hash': value.contractTxHash,
        'function': value._function,
        'height': value.height,
        'internal_tx': value.internalTx,
        'micro_index': value.microIndex,
    };
}

