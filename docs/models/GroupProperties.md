# GroupProperties

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **datacenter** | [**GroupPropertiesDatacenter**](GroupPropertiesDatacenter.md) |  | [optional] [default to undefined] |
| **location** | **string** | The data center location. | [readonly] [default to undefined] |
| **maxReplicaCount** | **number** | The maximum value for the number of replicas. Must be >= 0 and <= 100. Will be enforced for both automatic and manual changes. | [optional] [default to undefined] |
| **minReplicaCount** | **number** | The minimum value for the number of replicas. Must be >= 0 and <= 100. Will be enforced for both automatic and manual changes | [optional] [default to undefined] |
| **name** | **string** | The name of the VM Auto Scaling Group. This field must not be null or blank. | [optional] [default to undefined] |
| **policy** | [**GroupPolicy**](GroupPolicy.md) |  | [optional] [default to undefined] |
| **replicaConfiguration** | [**ReplicaPropertiesPost**](ReplicaPropertiesPost.md) |  | [optional] [default to undefined] |


