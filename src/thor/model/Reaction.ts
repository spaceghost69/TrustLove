// tslint:disable
/**
 * JamRoom API
 * The JamRoom API
 *
 * The version of the OpenAPI document: 0.9.26
 * Contact: info@jamroom.pro
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../src/runtime';

// thorapi

/**
 * 
 * @export
 * @interface Reaction
 */
export type Reaction  = {
    /**
     * UUID of the system object
     * @type {string}
     * @memberof Reaction
     */
    target: string;
    /**
     * the reaction to the item
     * @type {string}
     * @memberof Reaction
     */
    value: ReactionValueEnum;
    /**
     * Unique identifier for object in the system
     * @type {string}
     * @memberof Reaction
     */
    id?: string;
    /**
     * Unique identifier for owner of the object in the system
     * @type {string}
     * @memberof Reaction
     */
    ownerId?: string;
    /**
     * Date of object creation
     * @type {Date}
     * @memberof Reaction
     */
    createdDate?: Date;
    /**
     * Date of object modification
     * @type {Date}
     * @memberof Reaction
     */
    modifiedDate?: Date;
}

export function ReactionFromJSON(json: any): Reaction {
    return {
        'target': json['target'],
        'value': json['value'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'ownerId': !exists(json, 'ownerId') ? undefined : json['ownerId'],
        'createdDate': !exists(json, 'createdDate') ? undefined : new Date(json['createdDate']),
        'modifiedDate': !exists(json, 'modifiedDate') ? undefined : new Date(json['modifiedDate']),
    };
}

export function ReactionToJSON(value?: Reaction): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'target': value.target,
        'value': value.value,
        'id': value.id,
        'ownerId': value.ownerId,
        'createdDate': value.createdDate === undefined ? undefined : value.createdDate.toISOString(),
        'modifiedDate': value.modifiedDate === undefined ? undefined : value.modifiedDate.toISOString(),
    };
}

/**
* @export
* @enum {string}
*/
export enum ReactionValueEnum {
    Like = 'like',
    Dislike = 'dislike',
    Neutral = 'neutral',
    Angry = 'angry',
    Sad = 'sad',
    Question = 'question'
}


