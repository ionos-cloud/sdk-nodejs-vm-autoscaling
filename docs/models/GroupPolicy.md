# GroupPolicy

Defines the behavior of this VM Auto Scaling Group. A policy consists of triggers and actions, where an action is an automated behavior, and the trigger defines the circumstances under which the action is triggered. Currently, two separate actions are supported, namely scaling inward and outward, triggered by the thresholds defined for a particular metric.
## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **metric** | [**Metric**](Metric.md) |  | [default to undefined] |
| **range** | **string** | Specifies the time range for which the samples are to be aggregated. Must be >= 2 minutes. | [optional] [default to '120s'] |
| **scaleInAction** | [**GroupPolicyScaleInAction**](GroupPolicyScaleInAction.md) |  | [default to undefined] |
| **scaleInThreshold** | **number** | The lower threshold for the value of the \'metric\'. Used with the `less than` (<) operator. When this value is exceeded, a scale-in action is triggered, specified by the \'scaleInAction\' property. The value must have a higher minimum delta to the \'scaleOutThreshold\', depending on the \'metric\', to avoid competing for actions at the same time. | [default to undefined] |
| **scaleOutAction** | [**GroupPolicyScaleOutAction**](GroupPolicyScaleOutAction.md) |  | [default to undefined] |
| **scaleOutThreshold** | **number** | The upper threshold for the value of the \'metric\'. Used with the \'greater than\' (>) operator. A scale-out action is triggered when this value is exceeded, specified by the \'scaleOutAction\' property. The value must have a lower minimum delta to the \'scaleInThreshold\', depending on the metric, to avoid competing for actions simultaneously. If \'properties.policy.unit=TOTAL\', a value >= 40 must be chosen. | [default to undefined] |
| **unit** | [**QueryUnit**](QueryUnit.md) |  | [default to undefined] |


