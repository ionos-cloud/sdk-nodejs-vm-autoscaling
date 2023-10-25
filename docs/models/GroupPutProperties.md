# GroupPutProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **datacenter** | [**GroupPutPropertiesDatacenter**](GroupPutPropertiesDatacenter.md) |  | [optional] [default to undefined] |
| **location** | **string** | The data center location. | [readonly] [default to undefined] |
| **maxReplicaCount** | **number** | The maximum value for the number of replicas on a VM Auto Scaling Group. Must be >= 0 and <= 200. Will be enforced for both automatic and manual changes. | [default to undefined] |
| **minReplicaCount** | **number** | The minimum value for the number of replicas on a VM Auto Scaling Group. Must be >= 0 and <= 200. Will be enforced for both automatic and manual changes | [default to undefined] |
| **name** | **string** | The name of the VM Auto Scaling Group. This field must not be null or blank. | [default to undefined] |
| **policy** | [**GroupPolicy**](GroupPolicy.md) |  | [default to undefined] |
| **replicaConfiguration** | [**ReplicaPropertiesPost**](ReplicaPropertiesPost.md) |  | [default to undefined] |


