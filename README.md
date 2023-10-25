# Node API Client For IONOS Cloud VM Autoscaling
[![[ CI ] VM Autoscaling / Node](https://github.com/ionos-cloud/sdk-resources/actions/workflows/ci-vm-autoscaling-node.yml/badge.svg)](https://github.com/ionos-cloud/sdk-resources/actions/workflows/ci-vm-autoscaling-node.yml)
# Overview
The VM Auto Scaling Service enables IONOS clients to horizontally scale the number of VM replicas based on configured rules. You can use VM Auto Scaling to ensure that you have a sufficient number of replicas to handle your application loads at all times.

For this purpose, create a VM Auto Scaling Group that contains the server replicas. The VM Auto Scaling Service ensures that the number of replicas in the group is always within the defined limits.

When scaling policies are set, VM Auto Scaling creates or deletes replicas according to the requirements of your applications. For each policy, specified 'scale-in' and 'scale-out' actions are performed when the corresponding thresholds are reached.

## Getting Started

An IONOS account is required for access to the Cloud API; credentials from your registration are used to authenticate against the IONOS Cloud API.

## Installation

Install the following dependencies:

```shell
npm i --save @ionos-cloud/sdk-nodejs-vm-autoscaling
```

## Usage
Import the SDK using:

```javascript
const sdk = require('@ionos-cloud/sdk-nodejs-vm-autoscaling')
```

Or, if the import is done from an ES module, use:

```javascript
import * as sdk from '@ionos-cloud/sdk-nodejs-vm-autoscaling';
```

Usage example:
```javascript
const config = new sdk.Configuration({username: 'YOUR_USERNAME', password: 'YOUR_PASSWORD'});
const groupsApi = new sdk.AutoScalingGroupsApi(config);

groupsApi.groupsGet().then((response) => console.log(response));
```

### Authentication

The username and password or the authentication token can be manually specified when initializing the SDK client:

```typescript
const config = new sdk.Configuration({username: 'YOUR_USERNAME', password: 'YOUR_PASSWORD'});
const groupsApi = new sdk.AutoScalingGroupsApi(config);
```

Environment variables can also be used; the SDK uses the following variables:

* IONOS\_USERNAME - to specify the username used to login
* IONOS\_PASSWORD - to specify the password
* IONOS\_TOKEN - if an authentication token is being used

In this case, the client configuration must be initialized using `fromEnv()`:

```javascript
groupsApi = new sdk.AutoScalingGroupsApi(sdk.Configuration.fromEnv());
```

**Warning**: Make sure to follow the Information Security Best Practices when using credentials within your code or storing them in a file.

## Feature Reference

The IONOS Cloud SDK for Nodejs VM Autoscaling aims to offer access to all resources in the IONOS VM Autoscaling API, and has additional features to make integration easier:

* Authentication for API calls
* Asynchronous request handling

## FAQ

1. How can I open a bug report/feature request?

Bug reports and feature requests can be opened in the Issues repository: [https://github.com/ionos-cloud/sdk-nodejs-vm-autoscaling/issues/new/choose](https://github.com/ionos-cloud/sdk-nodejs-vm-autoscaling/issues/new/choose)

2. Can I contribute to the NodeJS VM Autoscaling SDK?

Our SDKs are automatically generated using OpenAPI Generator and don’t support manual changes. If you require changes, please open an issue and we will try to address it.
