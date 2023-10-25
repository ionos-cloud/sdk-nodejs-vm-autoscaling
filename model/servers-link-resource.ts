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



/**
 * The servers linked to the VM Auto Scaling Group.
 * @export
 * @interface ServersLinkResource
 */
export interface ServersLinkResource {

    /**
     * The unique resource identifier.
     * @type {string}
     * @memberof ServersLinkResource
     */
    id: string;

    /**
     * The resource type.
     * @type {string}
     * @memberof ServersLinkResource
     */
    type?: string;

    /**
     * The absolute URL to the resource\'s representation.
     * @type {string}
     * @memberof ServersLinkResource
     */
    href?: string;
}


