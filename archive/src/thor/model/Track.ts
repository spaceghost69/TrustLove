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
    AudioChannel,
    AudioChannelFromJSON,
    AudioChannelToJSON,
    SpatialAudioEvent,
    SpatialAudioEventFromJSON,
    SpatialAudioEventToJSON,
    TrackSetting,
    TrackSettingFromJSON,
    TrackSettingToJSON,
} from './';


// thorapi

/**
 * Represents the configuration settings over time for a media track.
 * @export
 * @interface Track
 */
export type Track  = {
    /**
     * 
     * @type {Array<TrackSetting>}
     * @memberof Track
     */
    settings: Array<TrackSetting>;
    /**
     * A unique display name for the media track.
     * @type {string}
     * @memberof Track
     */
    name?: string;
    /**
     * 
     * @type {Array<AudioChannel>}
     * @memberof Track
     */
    channels?: Array<AudioChannel>;
    /**
     * 
     * @type {Array<SpatialAudioEvent>}
     * @memberof Track
     */
    spatialAudioEvents?: Array<SpatialAudioEvent>;
    /**
     * L/R balance for 2 channel audio.
     * @type {number}
     * @memberof Track
     */
    balance?: number;
    /**
     * Initial decibel-based gain adjustment for the track, from -10 dB to +10 dB.
     * @type {number}
     * @memberof Track
     */
    inputGainDB?: number;
    /**
     * url for the track resource (audio/video)  (streaming or static)
     * @type {string}
     * @memberof Track
     */
    url?: string;
    /**
     * whether the track is muted
     * @type {boolean}
     * @memberof Track
     */
    muted?: boolean;
    /**
     * whether the track is solo
     * @type {boolean}
     * @memberof Track
     */
    solo?: boolean;
    /**
     * The status of the Track.
     * @type {string}
     * @memberof Track
     */
    status?: TrackStatusEnum;
    /**
     * Unique identifier for object in the system
     * @type {string}
     * @memberof Track
     */
    id?: string;
    /**
     * Unique identifier for owner of the object in the system
     * @type {string}
     * @memberof Track
     */
    ownerId?: string;
    /**
     * Date of object creation
     * @type {Date}
     * @memberof Track
     */
    createdDate?: Date;
    /**
     * Date of object modification
     * @type {Date}
     * @memberof Track
     */
    modifiedDate?: Date;
}

export function TrackFromJSON(json: any): Track {
    return {
        'settings': (json['settings'] as Array<any>).map(TrackSettingFromJSON),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'channels': !exists(json, 'channels') ? undefined : (json['channels'] as Array<any>).map(AudioChannelFromJSON),
        'spatialAudioEvents': !exists(json, 'spatialAudioEvents') ? undefined : (json['spatialAudioEvents'] as Array<any>).map(SpatialAudioEventFromJSON),
        'balance': !exists(json, 'balance') ? undefined : json['balance'],
        'inputGainDB': !exists(json, 'inputGainDB') ? undefined : json['inputGainDB'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'muted': !exists(json, 'muted') ? undefined : json['muted'],
        'solo': !exists(json, 'solo') ? undefined : json['solo'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'ownerId': !exists(json, 'ownerId') ? undefined : json['ownerId'],
        'createdDate': !exists(json, 'createdDate') ? undefined : new Date(json['createdDate']),
        'modifiedDate': !exists(json, 'modifiedDate') ? undefined : new Date(json['modifiedDate']),
    };
}

export function TrackToJSON(value?: Track): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'settings': (value.settings as Array<any>).map(TrackSettingToJSON),
        'name': value.name,
        'channels': value.channels === undefined ? undefined : (value.channels as Array<any>).map(AudioChannelToJSON),
        'spatialAudioEvents': value.spatialAudioEvents === undefined ? undefined : (value.spatialAudioEvents as Array<any>).map(SpatialAudioEventToJSON),
        'balance': value.balance,
        'inputGainDB': value.inputGainDB,
        'url': value.url,
        'muted': value.muted,
        'solo': value.solo,
        'status': value.status,
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
export enum TrackStatusEnum {
    Playback = 'playback',
    Recording = 'recording',
    Ready = 'ready',
    Disabled = 'disabled',
    Warning = 'warning',
    Error = 'error'
}

