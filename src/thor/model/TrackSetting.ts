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
 * Represents the settings for a media track.
 * @export
 * @interface TrackSetting
 */
export type TrackSetting  = {
    /**
     * The unique identifier for the track configuration.
     * @type {string}
     * @memberof TrackSetting
     */
    trackId: string;
    /**
     * The timestamp of the media event.
     * @type {Date}
     * @memberof TrackSetting
     */
    timestamp?: Date;
    /**
     * Frequency of the signal in Hz.
     * @type {number}
     * @memberof TrackSetting
     */
    frequency?: number;
    /**
     * L/R balance for 2 channel audio.
     * @type {number}
     * @memberof TrackSetting
     */
    balance?: number;
    /**
     * Decibel based gain adjustment for the track, from -10 dB to +10 dB.
     * @type {number}
     * @memberof TrackSetting
     */
    inputGainDB?: number;
    /**
     * Relative gain adjustment for the track, from 0 dB to 1 dB.
     * @type {number}
     * @memberof TrackSetting
     */
    outputGainRel?: number;
    /**
     * Unique identifier for object in the system
     * @type {string}
     * @memberof TrackSetting
     */
    id?: string;
    /**
     * Unique identifier for owner of the object in the system
     * @type {string}
     * @memberof TrackSetting
     */
    ownerId?: string;
    /**
     * Date of object creation
     * @type {Date}
     * @memberof TrackSetting
     */
    createdDate?: Date;
    /**
     * Date of object modification
     * @type {Date}
     * @memberof TrackSetting
     */
    modifiedDate?: Date;
}

export function TrackSettingFromJSON(json: any): TrackSetting {
    return {
        'trackId': json['trackId'],
        'timestamp': !exists(json, 'timestamp') ? undefined : new Date(json['timestamp']),
        'frequency': !exists(json, 'frequency') ? undefined : json['frequency'],
        'balance': !exists(json, 'balance') ? undefined : json['balance'],
        'inputGainDB': !exists(json, 'inputGainDB') ? undefined : json['inputGainDB'],
        'outputGainRel': !exists(json, 'outputGainRel') ? undefined : json['outputGainRel'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'ownerId': !exists(json, 'ownerId') ? undefined : json['ownerId'],
        'createdDate': !exists(json, 'createdDate') ? undefined : new Date(json['createdDate']),
        'modifiedDate': !exists(json, 'modifiedDate') ? undefined : new Date(json['modifiedDate']),
    };
}

export function TrackSettingToJSON(value?: TrackSetting): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'trackId': value.trackId,
        'timestamp': value.timestamp === undefined ? undefined : value.timestamp.toISOString(),
        'frequency': value.frequency,
        'balance': value.balance,
        'inputGainDB': value.inputGainDB,
        'outputGainRel': value.outputGainRel,
        'id': value.id,
        'ownerId': value.ownerId,
        'createdDate': value.createdDate === undefined ? undefined : value.createdDate.toISOString(),
        'modifiedDate': value.modifiedDate === undefined ? undefined : value.modifiedDate.toISOString(),
    };
}

