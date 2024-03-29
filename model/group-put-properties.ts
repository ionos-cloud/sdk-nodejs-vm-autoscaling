/* tslint:disable */
/* eslint-disable */
/**
 * VM Auto Scaling API
 * The VM Auto Scaling Service enables IONOS clients to horizontally scale the number of VM replicas based on configured rules. You can use VM Auto Scaling to ensure that you have a sufficient number of replicas to handle your application loads at all times.  For this purpose, create a VM Auto Scaling Group that contains the server replicas. The VM Auto Scaling Service ensures that the number of replicas in the group is always within the defined limits.   When scaling policies are set, VM Auto Scaling creates or deletes replicas according to the requirements of your applications. For each policy, specified \'scale-in\' and \'scale-out\' actions are performed when the corresponding thresholds are reached.
 *
 * The version of the OpenAPI document: 1-SDK.1
 * Contact: support@cloud.ionos.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { GroupPolicy } from './group-policy';
import { GroupPutPropertiesDatacenter } from './group-put-properties-datacenter';
import { ReplicaPropertiesPost } from './replica-properties-post';

/**
 * 
 * @export
 * @interface GroupPutProperties
 */
export interface GroupPutProperties {

    /**
     * 
     * @type {GroupPutPropertiesDatacenter}
     * @memberof GroupPutProperties
     */
    datacenter?: GroupPutPropertiesDatacenter;

    /**
     * The data center location.
     * @type {string}
     * @memberof GroupPutProperties
     */
    location: string;

    /**
     * The maximum value for the number of replicas on a VM Auto Scaling Group. Must be >= 0 and <= 200. Will be enforced for both automatic and manual changes.
     * @type {number}
     * @memberof GroupPutProperties
     */
    maxReplicaCount: number;

    /**
     * The minimum value for the number of replicas on a VM Auto Scaling Group. Must be >= 0 and <= 200. Will be enforced for both automatic and manual changes
     * @type {number}
     * @memberof GroupPutProperties
     */
    minReplicaCount: number;

    /**
     * The name of the VM Auto Scaling Group. This field must not be null or blank.
     * @type {string}
     * @memberof GroupPutProperties
     */
    name: string;

    /**
     * 
     * @type {GroupPolicy}
     * @memberof GroupPutProperties
     */
    policy: GroupPolicy;

    /**
     * 
     * @type {ReplicaPropertiesPost}
     * @memberof GroupPutProperties
     */
    replicaConfiguration: ReplicaPropertiesPost;
}


