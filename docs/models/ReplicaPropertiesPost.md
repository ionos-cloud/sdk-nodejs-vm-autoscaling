# ReplicaPropertiesPost

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **availabilityZone** | [**AvailabilityZone**](AvailabilityZone.md) |  | [optional] [default to undefined] |
| **cores** | **number** | The total number of cores for the VMs. | [default to undefined] |
| **cpuFamily** | [**CpuFamily**](CpuFamily.md) |  | [optional] [default to undefined] |
| **nics** | [**Array&lt;ReplicaNic&gt;**](ReplicaNic.md) | The list of NICs associated with this replica. | [optional] [default to undefined] |
| **ram** | **number** | The size of the memory for the VMs in MB. The size must be in multiples of 256 MB, with a minimum of 256 MB; if you set \'ramHotPlug=TRUE\', you must use at least 1024 MB. If you set the RAM size to more than 240 GB, \'ramHotPlug=FALSE\' is fixed. | [default to undefined] |
| **volumes** | [**Array&lt;ReplicaVolumePost&gt;**](ReplicaVolumePost.md) | List of volumes associated with this Replica. | [optional] [default to undefined] |


