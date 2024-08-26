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
import {
    Track,
    TrackFromJSON,
    TrackToJSON,
    User,
    UserFromJSON,
    UserToJSON,
} from './';


// thorapi

/**
 * Represents a live streaming event.
 * @export
 * @interface LiveStream
 */
export type LiveStream  = {
    /**
     * 
     * @type {string}
     * @memberof LiveStream
     */
    userId: string;
    /**
     * 
     * @type {string}
     * @memberof LiveStream
     */
    artwork?: string;
    /**
     * 
     * @type {User}
     * @memberof LiveStream
     */
    user?: User;
    /**
     * 
     * @type {string}
     * @memberof LiveStream
     */
    trackId?: string;
    /**
     * 
     * @type {Track}
     * @memberof LiveStream
     */
    track?: Track;
    /**
     * 
     * @type {number}
     * @memberof LiveStream
     */
    listenerCount?: number;
    /**
     * Unique identifier for object in the system
     * @type {string}
     * @memberof LiveStream
     */
    id?: string;
    /**
     * Unique identifier for owner of the object in the system
     * @type {string}
     * @memberof LiveStream
     */
    ownerId?: string;
    /**
     * Date of object creation
     * @type {Date}
     * @memberof LiveStream
     */
    createdDate?: Date;
    /**
     * Date of object modification
     * @type {Date}
     * @memberof LiveStream
     */
    modifiedDate?: Date;
}

export function LiveStreamFromJSON(json: any): LiveStream {
    return {
        'userId': json['userId'],
        'artwork': !exists(json, 'artwork') ? undefined : json['artwork'],
        'user': !exists(json, 'user') ? undefined : UserFromJSON(json['user']),
        'trackId': !exists(json, 'trackId') ? undefined : json['trackId'],
        'track': !exists(json, 'track') ? undefined : TrackFromJSON(json['track']),
        'listenerCount': !exists(json, 'listenerCount') ? undefined : json['listenerCount'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'ownerId': !exists(json, 'ownerId') ? undefined : json['ownerId'],
        'createdDate': !exists(json, 'createdDate') ? undefined : new Date(json['createdDate']),
        'modifiedDate': !exists(json, 'modifiedDate') ? undefined : new Date(json['modifiedDate']),
    };
}

export function LiveStreamToJSON(value?: LiveStream): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'userId': value.userId,
        'artwork': value.artwork,
        'user': UserToJSON(value.user),
        'trackId': value.trackId,
        'track': TrackToJSON(value.track),
        'listenerCount': value.listenerCount,
        'id': value.id,
        'ownerId': value.ownerId,
        'createdDate': value.createdDate === undefined ? undefined : value.createdDate.toISOString(),
        'modifiedDate': value.modifiedDate === undefined ? undefined : value.modifiedDate.toISOString(),
    };
}

