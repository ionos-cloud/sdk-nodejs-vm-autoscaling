# ReplicaNic

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **lan** | **number** | The LAN ID of this replica NIC. | [default to undefined] |
| **name** | **string** | The replica NIC name. | [default to undefined] |
| **dhcp** | **boolean** | DHCP for this replica NIC. This is an optional attribute with the default value \'TRUE\' if not specified in the request payload or as null. | [optional] [default to undefined] |
| **firewallActive** | **boolean** | Activate or deactivate the firewall. By default, an active firewall without any defined rules will block all incoming network traffic except for the firewall rules that explicitly allows certain protocols, IP addresses and ports. | [optional] [default to undefined] |
| **firewallType** | **string** | The type of firewall rules that will be allowed on the NIC. If not specified, the default INGRESS value is used. | [optional] [default to undefined] |
| **flowLogs** | [**Array&lt;NicFlowLog&gt;**](NicFlowLog.md) | List of all flow logs for the specified NIC. | [optional] [default to undefined] |
| **firewallRules** | [**Array&lt;NicFirewallRule&gt;**](NicFirewallRule.md) | List of all firewall rules for the specified NIC. | [optional] [default to undefined] |
| **targetGroup** | [**TargetGroup**](TargetGroup.md) |  | [optional] [default to undefined] |


