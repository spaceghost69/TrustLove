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
 * Metadata for ThorUX components.
 * @export
 * @interface ThorUXMeta
 */
export type ThorUXMeta  = {
    /**
     * Temporary string holder for config data.
     * @type {string}
     * @memberof ThorUXMeta
     */
    thoruxComponents?: string;
    /**
     * Unique identifier for object in the system
     * @type {string}
     * @memberof ThorUXMeta
     */
    id?: string;
    /**
     * Unique identifier for owner of the object in the system
     * @type {string}
     * @memberof ThorUXMeta
     */
    ownerId?: string;
    /**
     * Date of object creation
     * @type {Date}
     * @memberof ThorUXMeta
     */
    createdDate?: Date;
    /**
     * Date of object modification
     * @type {Date}
     * @memberof ThorUXMeta
     */
    modifiedDate?: Date;
}

export function ThorUXMetaFromJSON(json: any): ThorUXMeta {
    return {
        'thoruxComponents': !exists(json, 'thoruxComponents') ? undefined : json['thoruxComponents'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'ownerId': !exists(json, 'ownerId') ? undefined : json['ownerId'],
        'createdDate': !exists(json, 'createdDate') ? undefined : new Date(json['createdDate']),
        'modifiedDate': !exists(json, 'modifiedDate') ? undefined : new Date(json['modifiedDate']),
    };
}

export function ThorUXMetaToJSON(value?: ThorUXMeta): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'thoruxComponents': value.thoruxComponents,
        'id': value.id,
        'ownerId': value.ownerId,
        'createdDate': value.createdDate === undefined ? undefined : value.createdDate.toISOString(),
        'modifiedDate': value.modifiedDate === undefined ? undefined : value.modifiedDate.toISOString(),
    };
}

