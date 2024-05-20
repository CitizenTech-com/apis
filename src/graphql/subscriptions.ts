/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../awsAPIs";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUsers = /* GraphQL */ `subscription OnCreateUsers(
  $filter: ModelSubscriptionUsersFilterInput
  $owner: String
) {
  onCreateUsers(filter: $filter, owner: $owner) {
    id
    name
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUsersSubscriptionVariables,
  APITypes.OnCreateUsersSubscription
>;
export const onUpdateUsers = /* GraphQL */ `subscription OnUpdateUsers(
  $filter: ModelSubscriptionUsersFilterInput
  $owner: String
) {
  onUpdateUsers(filter: $filter, owner: $owner) {
    id
    name
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUsersSubscriptionVariables,
  APITypes.OnUpdateUsersSubscription
>;
export const onDeleteUsers = /* GraphQL */ `subscription OnDeleteUsers(
  $filter: ModelSubscriptionUsersFilterInput
  $owner: String
) {
  onDeleteUsers(filter: $filter, owner: $owner) {
    id
    name
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUsersSubscriptionVariables,
  APITypes.OnDeleteUsersSubscription
>;
