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


import { GroupPolicyScaleInAction } from './group-policy-scale-in-action';
import { GroupPolicyScaleOutAction } from './group-policy-scale-out-action';
import { Metric } from './metric';
import { QueryUnit } from './query-unit';

/**
 * Defines the behavior of this VM Auto Scaling Group. A policy consists of triggers and actions, where an action is an automated behavior, and the trigger defines the circumstances under which the action is triggered. Currently, two separate actions are supported, namely scaling inward and outward, triggered by the thresholds defined for a particular metric.
 * @export
 * @interface GroupPolicy
 */
export interface GroupPolicy {

    /**
     * 
     * @type {Metric}
     * @memberof GroupPolicy
     */
    metric: Metric;

    /**
     * Specifies the time range for which the samples are to be aggregated. Must be >= 2 minutes.
     * @type {string}
     * @memberof GroupPolicy
     */
    range?: string;

    /**
     * 
     * @type {GroupPolicyScaleInAction}
     * @memberof GroupPolicy
     */
    scaleInAction: GroupPolicyScaleInAction;

    /**
     * The lower threshold for the value of the \'metric\'. Used with the `less than` (<) operator. When this value is exceeded, a scale-in action is triggered, specified by the \'scaleInAction\' property. The value must have a higher minimum delta to the \'scaleOutThreshold\', depending on the \'metric\', to avoid competing for actions at the same time.
     * @type {number}
     * @memberof GroupPolicy
     */
    scaleInThreshold: number;

    /**
     * 
     * @type {GroupPolicyScaleOutAction}
     * @memberof GroupPolicy
     */
    scaleOutAction: GroupPolicyScaleOutAction;

    /**
     * The upper threshold for the value of the \'metric\'. Used with the \'greater than\' (>) operator. A scale-out action is triggered when this value is exceeded, specified by the \'scaleOutAction\' property. The value must have a lower minimum delta to the \'scaleInThreshold\', depending on the metric, to avoid competing for actions simultaneously. If \'properties.policy.unit=TOTAL\', a value >= 40 must be chosen.
     * @type {number}
     * @memberof GroupPolicy
     */
    scaleOutThreshold: number;

    /**
     * 
     * @type {QueryUnit}
     * @memberof GroupPolicy
     */
    unit: QueryUnit;
}


