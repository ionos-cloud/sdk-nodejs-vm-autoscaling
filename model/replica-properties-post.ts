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


import { AvailabilityZone } from './availability-zone';
import { CpuFamily } from './cpu-family';
import { ReplicaNic } from './replica-nic';
import { ReplicaVolumePost } from './replica-volume-post';

/**
 * 
 * @export
 * @interface ReplicaPropertiesPost
 */
export interface ReplicaPropertiesPost {

    /**
     * 
     * @type {AvailabilityZone}
     * @memberof ReplicaPropertiesPost
     */
    availabilityZone?: AvailabilityZone | null;

    /**
     * The total number of cores for the VMs.
     * @type {number}
     * @memberof ReplicaPropertiesPost
     */
    cores: number;

    /**
     * 
     * @type {CpuFamily}
     * @memberof ReplicaPropertiesPost
     */
    cpuFamily?: CpuFamily;

    /**
     * The list of NICs associated with this replica.
     * @type {Array<ReplicaNic>}
     * @memberof ReplicaPropertiesPost
     */
    nics?: Array<ReplicaNic>;

    /**
     * The size of the memory for the VMs in MB. The size must be in multiples of 256 MB, with a minimum of 256 MB; if you set \'ramHotPlug=TRUE\', you must use at least 1024 MB. If you set the RAM size to more than 240 GB, \'ramHotPlug=FALSE\' is fixed.
     * @type {number}
     * @memberof ReplicaPropertiesPost
     */
    ram: number;

    /**
     * List of volumes associated with this Replica.
     * @type {Array<ReplicaVolumePost>}
     * @memberof ReplicaPropertiesPost
     */
    volumes?: Array<ReplicaVolumePost>;
}


