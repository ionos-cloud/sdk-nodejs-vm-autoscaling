# AutoScalingGroupsApi

All URIs are relative to *https://api.ionos.com/autoscaling*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**groupsActionsFindById**](AutoScalingGroupsApi.md#groupsactionsfindbyid) | **GET** /groups/{groupId}/actions/{actionId} | Get Scaling Action Details by ID |
| [**groupsActionsGet**](AutoScalingGroupsApi.md#groupsactionsget) | **GET** /groups/{groupId}/actions | Get Scaling Actions |
| [**groupsDelete**](AutoScalingGroupsApi.md#groupsdelete) | **DELETE** /groups/{groupId} | Delete a VM Auto Scaling Group by ID |
| [**groupsFindById**](AutoScalingGroupsApi.md#groupsfindbyid) | **GET** /groups/{groupId} | Get an Auto Scaling by ID |
| [**groupsGet**](AutoScalingGroupsApi.md#groupsget) | **GET** /groups | Get VM Auto Scaling Groups |
| [**groupsPost**](AutoScalingGroupsApi.md#groupspost) | **POST** /groups | Create a VM Auto Scaling Group |
| [**groupsPut**](AutoScalingGroupsApi.md#groupsput) | **PUT** /groups/{groupId} | Update a VM Auto Scaling Group by ID |
| [**groupsServersFindById**](AutoScalingGroupsApi.md#groupsserversfindbyid) | **GET** /groups/{groupId}/servers/{serverId} | Get VM Auto Scaling Group Server by ID |
| [**groupsServersGet**](AutoScalingGroupsApi.md#groupsserversget) | **GET** /groups/{groupId}/servers | Get VM Auto Scaling Group Servers |


## groupsActionsFindById

> <Action> groupsActionsFindById(actionId, groupId, opts)

Get Scaling Action Details by ID

Retrieves the details of a scaling action specified by its ID. This operation returns metadata, properties, and the current status, for the specified scaling action

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-vm-autoscaling');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.AutoScalingGroupsApi(config);
// Get Scaling Action Details by ID
api_instance
  .groupsActionsFindById({
    actionId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    groupId: groupId_example,
    depth: 8.14, 
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **actionId** | [**string**](../models/.md) |  | [default to undefined] |
| **groupId** | **string** |  | [default to undefined] |
| **depth** | **number** | With this parameter, you control the level of detail of the response objects:    - &#x60;&#x60;0&#x60;&#x60;: Only direct properties are included; children (such as executions or transitions) are not considered.    - &#x60;&#x60;1&#x60;&#x60;: Direct properties and children references are included.    - &#x60;&#x60;2&#x60;&#x60;: Direct properties and children properties are included.    - &#x60;&#x60;3&#x60;&#x60;: Direct properties and children properties and children\&#39;s children are included.    - etc.   | [optional][default to undefined] |

### Return type

[**Action**](../models/Action.md)

### Authorization

tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## groupsActionsGet

> <ActionCollection> groupsActionsGet(groupId, opts)

Get Scaling Actions

Retrieves the list of the last Auto Scaling actions or jobs performed by the VM Auto Scaling.The actions are specified by its ID. Only the last 10 actions are available

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-vm-autoscaling');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.AutoScalingGroupsApi(config);
// Get Scaling Actions
api_instance
  .groupsActionsGet({
    groupId: groupId_example,
    depth: 8.14,
    orderBy: orderBy_example, 
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **groupId** | **string** |  | [default to undefined] |
| **depth** | **number** | With this parameter, you control the level of detail of the response objects:    - &#x60;&#x60;0&#x60;&#x60;: Only direct properties are included; children (such as executions or transitions) are not considered.    - &#x60;&#x60;1&#x60;&#x60;: Direct properties and children references are included.    - &#x60;&#x60;2&#x60;&#x60;: Direct properties and children properties are included.    - &#x60;&#x60;3&#x60;&#x60;: Direct properties and children properties and children\&#39;s children are included.    - etc.   | [optional][default to undefined] |
| **orderBy** | **string** | Use this parameter to specify by which the returned list should be sorted. Valid values are: &#x60;&#x60;createdDate&#x60;&#x60; and &#x60;&#x60;lastModifiedDate&#x60;&#x60;. | [optional][default to &#39;createdDate&#39;] |

### Return type

[**ActionCollection**](../models/ActionCollection.md)

### Authorization

tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## groupsDelete

> groupsDelete(groupId)

Delete a VM Auto Scaling Group by ID

Deletes the VM Auto Scaling Group specified by its ID.  >Deleting the associated servers and disks is currently not implemented.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-vm-autoscaling');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.AutoScalingGroupsApi(config);
// Delete a VM Auto Scaling Group by ID
api_instance
  .groupsDelete({
    groupId: 38400000-8cf0-11bd-b23e-10b96e4ef00d
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **groupId** | [**string**](../models/.md) |  | [default to undefined] |

### Return type

nil (empty response body)

### Authorization

tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## groupsFindById

> <Group> groupsFindById(groupId, opts)

Get an Auto Scaling by ID

Retrieves the VM Auto Scaling Group specified by its ID including the details.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-vm-autoscaling');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.AutoScalingGroupsApi(config);
// Get an Auto Scaling by ID
api_instance
  .groupsFindById({
    groupId: groupId_example,
    depth: 8.14, 
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **groupId** | **string** |  | [default to undefined] |
| **depth** | **number** | With this parameter, you control the level of detail of the response objects:    - &#x60;&#x60;0&#x60;&#x60;: Only direct properties are included; children (such as executions or transitions) are not considered.    - &#x60;&#x60;1&#x60;&#x60;: Direct properties and children references are included.    - &#x60;&#x60;2&#x60;&#x60;: Direct properties and children properties are included.    - &#x60;&#x60;3&#x60;&#x60;: Direct properties and children properties and children\&#39;s children are included.    - etc.   | [optional][default to undefined] |

### Return type

[**Group**](../models/Group.md)

### Authorization

tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## groupsGet

> <GroupCollection> groupsGet(opts)

Get VM Auto Scaling Groups

Lists all VM Auto Scaling Groups of your account.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-vm-autoscaling');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.AutoScalingGroupsApi(config);
// Get VM Auto Scaling Groups
api_instance
  .groupsGet({
    depth: 8.14,
    orderBy: orderBy_example
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **depth** | **number** | With this parameter, you control the level of detail of the response objects:    - &#x60;&#x60;0&#x60;&#x60;: Only direct properties are included; children (such as executions or transitions) are not considered.    - &#x60;&#x60;1&#x60;&#x60;: Direct properties and children references are included.    - &#x60;&#x60;2&#x60;&#x60;: Direct properties and children properties are included.    - &#x60;&#x60;3&#x60;&#x60;: Direct properties and children properties and children\&#39;s children are included.    - etc.   | [optional][default to undefined] |
| **orderBy** | **string** | Use this parameter to specify by which the returned list should be sorted. Valid values are: &#x60;&#x60;createdDate&#x60;&#x60; and &#x60;&#x60;lastModifiedDate&#x60;&#x60;. | [optional][default to &#39;createdDate&#39;] |

### Return type

[**GroupCollection**](../models/GroupCollection.md)

### Authorization

tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## groupsPost

> <GroupPostResponse> groupsPost(groupPost)

Create a VM Auto Scaling Group

Creates a VM Auto Scaling Group.   > Note that creating a group triggers the creation of two monitoring alarms for \'Scale-In\' and \'Scale-Out\' operations according to the \'Policy\' settings.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-vm-autoscaling');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.AutoScalingGroupsApi(config);
// Create a VM Auto Scaling Group
api_instance
  .groupsPost({
    groupPost: groupPost_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **groupPost** | [**GroupPost**](../models/GroupPost.md) |  |  |

### Return type

[**GroupPostResponse**](../models/GroupPostResponse.md)

### Authorization

tokenAuth

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## groupsPut

> <Group> groupsPut(groupId, groupPut)

Update a VM Auto Scaling Group by ID

Updates the VM Auto Scaling Group specified by its ID. The IDs assigned by the system when the resource is created, such as \'properties.datacenter.id\' and \'backupunitId\', are immutable and cannot be updated.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-vm-autoscaling');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.AutoScalingGroupsApi(config);
// Update a VM Auto Scaling Group by ID
api_instance
  .groupsPut({
    groupId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    groupPut: groupPut_example
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **groupId** | [**string**](../models/.md) |  | [default to undefined] |
| **groupPut** | [**GroupPut**](../models/GroupPut.md) |  |  |

### Return type

[**Group**](../models/Group.md)

### Authorization

tokenAuth

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## groupsServersFindById

> <Server> groupsServersFindById(groupId, serverId, opts)

Get VM Auto Scaling Group Server by ID

Retrieves the properties of the server specified by its ID.  >Note that the server IDs of the VM Auto Scaling Groups are different from and do not match the VM server IDs in the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-vm-autoscaling');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.AutoScalingGroupsApi(config);
// Get VM Auto Scaling Group Server by ID
api_instance
  .groupsServersFindById({
    groupId: groupId_example,
    serverId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    depth: 8.14, 
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **groupId** | **string** |  | [default to undefined] |
| **serverId** | [**string**](../models/.md) |  | [default to undefined] |
| **depth** | **number** | With this parameter, you control the level of detail of the response objects:    - &#x60;&#x60;0&#x60;&#x60;: Only direct properties are included; children (such as executions or transitions) are not considered.    - &#x60;&#x60;1&#x60;&#x60;: Direct properties and children references are included.    - &#x60;&#x60;2&#x60;&#x60;: Direct properties and children properties are included.    - &#x60;&#x60;3&#x60;&#x60;: Direct properties and children properties and children\&#39;s children are included.    - etc.   | [optional][default to undefined] |

### Return type

[**Server**](../models/Server.md)

### Authorization

tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## groupsServersGet

> <ServerCollection> groupsServersGet(groupId, opts)

Get VM Auto Scaling Group Servers

Retrieves all servers associated with the VM Auto Scaling Group specified by its ID.   >Note that the server IDs of the VM Auto Scaling Groups are different from and do not match the VM server IDs in the data center.

### Examples

```javascript
const ionoscloud = require('@ionos-cloud/sdk-nodejs-vm-autoscaling');
// setup authorization
const config = new ionoscloud.Configuration({
    username: 'YOUR_USERNAME',
    password: 'YOUR_PASSWORD',
    apiKey: 'YOUR_API_KEY'
});
const api_instance = new ionoscloud.AutoScalingGroupsApi(config);
// Get VM Auto Scaling Group Servers
api_instance
  .groupsServersGet({
    groupId: groupId_example,
    depth: 8.14,
    orderBy: orderBy_example, 
    options: {}
  })
  .then((response) => console.log(response.data))
  .catch((error) => console.log(error.response.data));
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **groupId** | **string** |  | [default to undefined] |
| **depth** | **number** | With this parameter, you control the level of detail of the response objects:    - &#x60;&#x60;0&#x60;&#x60;: Only direct properties are included; children (such as executions or transitions) are not considered.    - &#x60;&#x60;1&#x60;&#x60;: Direct properties and children references are included.    - &#x60;&#x60;2&#x60;&#x60;: Direct properties and children properties are included.    - &#x60;&#x60;3&#x60;&#x60;: Direct properties and children properties and children\&#39;s children are included.    - etc.   | [optional][default to undefined] |
| **orderBy** | **string** | Use this parameter to specify by which the returned list should be sorted. Valid values are: &#x60;&#x60;createdDate&#x60;&#x60; and &#x60;&#x60;lastModifiedDate&#x60;&#x60;. | [optional][default to &#39;createdDate&#39;] |

### Return type

[**ServerCollection**](../models/ServerCollection.md)

### Authorization

tokenAuth

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

