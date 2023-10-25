# ReplicaVolumePost

## Properties
| Name | Type | Description | Notes |
| ------------ | ------------- | ------------- | ------------- |
| **image** | **string** | The image installed on the disk. Currently, only the UUID of the image is supported.  >Note that either \'image\' or \'imageAlias\' must be specified, but not both. | [optional] [default to undefined] |
| **imageAlias** | **string** | The image installed on the volume. Must be an \'imageAlias\' as specified via the images API. Note that one of \'image\' or \'imageAlias\' must be set, but not both. | [optional] [default to undefined] |
| **name** | **string** | The replica volume name. | [default to undefined] |
| **size** | **number** | The size of this replica volume in GB. | [default to undefined] |
| **sshKeys** | **Array&lt;string&gt;** | The SSH keys of this volume. | [optional] [default to undefined] |
| **type** | [**VolumeHwType**](VolumeHwType.md) |  | [default to undefined] |
| **userData** | **string** | The user data (Cloud Init) for this replica volume. | [optional] [default to undefined] |
| **bus** | [**BusType**](BusType.md) |  | [optional] [default to undefined] |
| **backupunitId** | **string** | The ID of the backup unit that the user has access to. The property is immutable and is only allowed to be set on creation of a new a volume. It is mandatory to provide either \'public image\' or \'imageAlias\' in conjunction with this property. | [optional] [default to undefined] |
| **bootOrder** | **string** | Determines whether the volume will be used as a boot volume. Set to NONE, the volume will not be used as boot volume. Set to PRIMARY, the volume will be used as boot volume and set to AUTO will delegate the decision to the provisioning engine to decide whether to use the voluem as boot volume. Notice that exactly one volume can be set to PRIMARY or all of them set to AUTO. | [default to undefined] |
| **imagePassword** | **string** | The image password for this replica volume. | [optional] [default to undefined] |


