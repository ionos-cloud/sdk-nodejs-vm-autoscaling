# NicFirewallRule

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **name** | **string** | The name of the firewall rule. | [optional] [default to undefined] |
| **protocol** | **string** | The protocol for the rule. The property cannot be modified after its creation (not allowed in update requests). | [default to undefined] |
| **sourceMac** | **string** | Only traffic originating from the respective MAC address is permitted. Valid format: \'aa:bb:cc:dd:ee:ff\'. The value \'null\' allows traffic from any MAC address. | [optional] [default to undefined] |
| **sourceIp** | **string** | Only traffic originating from the respective IPv4 address is permitted. The value \'null\' allows traffic from any IP address. | [optional] [default to undefined] |
| **targetIp** | **string** | If the target NIC has multiple IP addresses, only the traffic directed to the respective IP address of the NIC is allowed. The value \'null\' allows traffic to any target IP address. | [optional] [default to undefined] |
| **icmpCode** | **number** | Sets the allowed code (from 0 to 254) when ICMP protocol is selected. The value \'null\'\' allows all codes. | [optional] [default to undefined] |
| **icmpType** | **number** | Sets the allowed type (from 0 to 254) if the protocol ICMP is selected. The value \'null\' allows all types. | [optional] [default to undefined] |
| **portRangeStart** | **number** | Sets the initial range of the allowed port (from 1 to 65535) if the protocol TCP or UDP is selected. The value \'null\' for \'portRangeStart\' and \'portRangeEnd\' allows all ports. | [optional] [default to undefined] |
| **portRangeEnd** | **number** | Sets the end range of the allowed port (from 1 to 65535) if the protocol TCP or UDP is selected. The value \'null\' for \'portRangeStart\' and \'portRangeEnd\' allows all ports. | [optional] [default to undefined] |
| **type** | **string** | The firewall rule type. If not specified, the default value \'INGRESS\' is used. | [optional] [default to undefined] |


