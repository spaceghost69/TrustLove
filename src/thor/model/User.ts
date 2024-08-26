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
    Address,
    AddressFromJSON,
    AddressToJSON,
    Authority,
    AuthorityFromJSON,
    AuthorityToJSON,
    Organization,
    OrganizationFromJSON,
    OrganizationToJSON,
    Role,
    RoleFromJSON,
    RoleToJSON,
} from './';


// thorapi

/**
 * 
 * @export
 * @interface User
 */
export type User  = {
    /**
     * Your account Password
     * @type {string}
     * @memberof User
     */
    password: string;
    /**
     * The main email address for the user (encrypted)
     * @type {string}
     * @memberof User
     */
    email: string;
    /**
     * first name of user (encrypted)
     * @type {string}
     * @memberof User
     */
    firstName?: string;
    /**
     * middle name of user
     * @type {string}
     * @memberof User
     */
    middleName?: string;
    /**
     * last name of user (encrypted)
     * @type {string}
     * @memberof User
     */
    lastName?: string;
    /**
     * Your account Username
     * @type {string}
     * @memberof User
     */
    userName?: string;
    /**
     * Encrypted identity (Facial Recognition, Fingerprint Scanner, etc.)
     * @type {string}
     * @memberof User
     */
    readonly fingerprint?: string;
    /**
     * SSN or a 10 digit federal government ID (encrypted)
     * @type {string}
     * @memberof User
     */
    federalIdentification?: string;
    /**
     * Country of residence 3-character code
     * @type {string}
     * @memberof User
     */
    residenceCountry?: string;
    /**
     * Driver\'s License or a 10 digit state government ID
     * @type {string}
     * @memberof User
     */
    stateIdentification?: string;
    /**
     * State of residence 2-character code (USA)
     * @type {string}
     * @memberof User
     */
    residenceState?: string;
    /**
     * The username for your primary social account (if any)
     * @type {string}
     * @memberof User
     */
    social?: string;
    /**
     * More in-depth information about you and your account
     * @type {string}
     * @memberof User
     */
    bio?: string;
    /**
     * URL for user avatar image
     * @type {string}
     * @memberof User
     */
    avatarUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    organizationId?: string;
    /**
     * 
     * @type {Organization}
     * @memberof User
     */
    organization?: Organization;
    /**
     * 
     * @type {Array<Address>}
     * @memberof User
     */
    addresses?: Array<Address>;
    /**
     * Spring Security User field whether the user is enabled
     * @type {boolean}
     * @memberof User
     */
    enabled?: boolean;
    /**
     * Spring Security User field whether the user\'s login credentials have expired
     * @type {boolean}
     * @memberof User
     */
    credentialNonExpired?: boolean;
    /**
     * Spring Security User field whether the user account is enabled
     * @type {boolean}
     * @memberof User
     */
    accountEnabled?: boolean;
    /**
     * Spring Security User field whether the user account is locked
     * @type {boolean}
     * @memberof User
     */
    accountNonLocked?: boolean;
    /**
     * Spring Security User field whether the user account has expired
     * @type {boolean}
     * @memberof User
     */
    accountNonExpired?: boolean;
    /**
     * the granted roles (or <code>null</code> if the granted authority cannot be expressed as a <code>String</code> with sufficient precision).
     * @type {Array<Role>}
     * @memberof User
     */
    roles?: Array<Role>;
    /**
     * the granted authorities (or <code>null</code> if the granted authority cannot be expressed as a <code>String</code> with sufficient precision).
     * @type {Array<Authority>}
     * @memberof User
     */
    authorities?: Array<Authority>;
    /**
     * Unique identifier for object in the system
     * @type {string}
     * @memberof User
     */
    id?: string;
    /**
     * Unique identifier for owner of the object in the system
     * @type {string}
     * @memberof User
     */
    ownerId?: string;
    /**
     * Date of object creation
     * @type {Date}
     * @memberof User
     */
    createdDate?: Date;
    /**
     * Date of object modification
     * @type {Date}
     * @memberof User
     */
    modifiedDate?: Date;
}

export function UserFromJSON(json: any): User {
    return {
        'password': json['password'],
        'email': json['email'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'middleName': !exists(json, 'middleName') ? undefined : json['middleName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'userName': !exists(json, 'userName') ? undefined : json['userName'],
        'fingerprint': !exists(json, 'fingerprint') ? undefined : json['fingerprint'],
        'federalIdentification': !exists(json, 'federalIdentification') ? undefined : json['federalIdentification'],
        'residenceCountry': !exists(json, 'residenceCountry') ? undefined : json['residenceCountry'],
        'stateIdentification': !exists(json, 'stateIdentification') ? undefined : json['stateIdentification'],
        'residenceState': !exists(json, 'residenceState') ? undefined : json['residenceState'],
        'social': !exists(json, 'social') ? undefined : json['social'],
        'bio': !exists(json, 'bio') ? undefined : json['bio'],
        'avatarUrl': !exists(json, 'avatar_url') ? undefined : json['avatar_url'],
        'organizationId': !exists(json, 'organizationId') ? undefined : json['organizationId'],
        'organization': !exists(json, 'organization') ? undefined : OrganizationFromJSON(json['organization']),
        'addresses': !exists(json, 'addresses') ? undefined : (json['addresses'] as Array<any>).map(AddressFromJSON),
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'credentialNonExpired': !exists(json, 'credentialNonExpired') ? undefined : json['credentialNonExpired'],
        'accountEnabled': !exists(json, 'accountEnabled') ? undefined : json['accountEnabled'],
        'accountNonLocked': !exists(json, 'accountNonLocked') ? undefined : json['accountNonLocked'],
        'accountNonExpired': !exists(json, 'accountNonExpired') ? undefined : json['accountNonExpired'],
        'roles': !exists(json, 'roles') ? undefined : (json['roles'] as Array<any>).map(RoleFromJSON),
        'authorities': !exists(json, 'authorities') ? undefined : (json['authorities'] as Array<any>).map(AuthorityFromJSON),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'ownerId': !exists(json, 'ownerId') ? undefined : json['ownerId'],
        'createdDate': !exists(json, 'createdDate') ? undefined : new Date(json['createdDate']),
        'modifiedDate': !exists(json, 'modifiedDate') ? undefined : new Date(json['modifiedDate']),
    };
}

export function UserToJSON(value?: User): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'password': value.password,
        'email': value.email,
        'firstName': value.firstName,
        'middleName': value.middleName,
        'lastName': value.lastName,
        'userName': value.userName,
        'federalIdentification': value.federalIdentification,
        'residenceCountry': value.residenceCountry,
        'stateIdentification': value.stateIdentification,
        'residenceState': value.residenceState,
        'social': value.social,
        'bio': value.bio,
        'avatar_url': value.avatarUrl,
        'organizationId': value.organizationId,
        'organization': OrganizationToJSON(value.organization),
        'addresses': value.addresses === undefined ? undefined : (value.addresses as Array<any>).map(AddressToJSON),
        'enabled': value.enabled,
        'credentialNonExpired': value.credentialNonExpired,
        'accountEnabled': value.accountEnabled,
        'accountNonLocked': value.accountNonLocked,
        'accountNonExpired': value.accountNonExpired,
        'roles': value.roles === undefined ? undefined : (value.roles as Array<any>).map(RoleToJSON),
        'authorities': value.authorities === undefined ? undefined : (value.authorities as Array<any>).map(AuthorityToJSON),
        'id': value.id,
        'ownerId': value.ownerId,
        'createdDate': value.createdDate === undefined ? undefined : value.createdDate.toISOString(),
        'modifiedDate': value.modifiedDate === undefined ? undefined : value.modifiedDate.toISOString(),
    };
}


