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
 * @interface PersistentLogin
 */
export type PersistentLogin  = {
    /**
     * 
     * @type {string}
     * @memberof PersistentLogin
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof PersistentLogin
     */
    series: string;
    /**
     * 
     * @type {string}
     * @memberof PersistentLogin
     */
    token: string;
    /**
     * 
     * @type {Date}
     * @memberof PersistentLogin
     */
    lastUsed: Date;
    /**
     * Unique identifier for object in the system
     * @type {string}
     * @memberof PersistentLogin
     */
    id?: string;
    /**
     * Unique identifier for owner of the object in the system
     * @type {string}
     * @memberof PersistentLogin
     */
    ownerId?: string;
    /**
     * Date of object creation
     * @type {Date}
     * @memberof PersistentLogin
     */
    createdDate?: Date;
    /**
     * Date of object modification
     * @type {Date}
     * @memberof PersistentLogin
     */
    modifiedDate?: Date;
}

export function PersistentLoginFromJSON(json: any): PersistentLogin {
    return {
        'username': json['username'],
        'series': json['series'],
        'token': json['token'],
        'lastUsed': new Date(json['last_used']),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'ownerId': !exists(json, 'ownerId') ? undefined : json['ownerId'],
        'createdDate': !exists(json, 'createdDate') ? undefined : new Date(json['createdDate']),
        'modifiedDate': !exists(json, 'modifiedDate') ? undefined : new Date(json['modifiedDate']),
    };
}

export function PersistentLoginToJSON(value?: PersistentLogin): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'username': value.username,
        'series': value.series,
        'token': value.token,
        'last_used': value.lastUsed.toISOString(),
        'id': value.id,
        'ownerId': value.ownerId,
        'createdDate': value.createdDate === undefined ? undefined : value.createdDate.toISOString(),
        'modifiedDate': value.modifiedDate === undefined ? undefined : value.modifiedDate.toISOString(),
    };
}


