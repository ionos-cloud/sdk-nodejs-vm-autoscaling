# GroupPolicyScaleOutAction

Defines the action to be performed when the \'scaleOutThreshold\' is exceeded. Here, scaling is always about adding new VMs to this VM Auto Scaling Group.
## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **amount** | **number** | \'amountType=ABSOLUTE\' specifies the absolute number of VMs that are added or removed. The value must be between 1 to 10.   \'amountType=PERCENTAGE\' specifies the percentage value that is applied to the current number of replicas of the VM Auto Scaling Group. The value must be between 1 to 200.   At least one VM is always added or removed.   Note that for \'SCALE_IN\' operations, volumes are not deleted after the server is deleted. | [default to undefined] |
| **amountType** | [**ActionAmount**](ActionAmount.md) |  | [default to undefined] |
| **cooldownPeriod** | **string** | The minimum time that elapses after the start of this scaling action until the following scaling action is started. While a scaling action is in progress, no second action is initiated for the same VM Auto Scaling Group. Instead, the metric is re-evaluated after the current scaling action completes (either successfully or with errors). This is currently validated with a minimum value of 2 minutes and a maximum of 24 hours. The default value is 5 minutes if not specified. | [optional] [default to '5m'] |


