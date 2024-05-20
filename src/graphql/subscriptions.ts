/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../awsAPIs";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateMember = /* GraphQL */ `subscription OnCreateMember(
  $filter: ModelSubscriptionMemberFilterInput
  $owner: String
) {
  onCreateMember(filter: $filter, owner: $owner) {
    id
    name
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateMemberSubscriptionVariables,
  APITypes.OnCreateMemberSubscription
>;
export const onUpdateMember = /* GraphQL */ `subscription OnUpdateMember(
  $filter: ModelSubscriptionMemberFilterInput
  $owner: String
) {
  onUpdateMember(filter: $filter, owner: $owner) {
    id
    name
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateMemberSubscriptionVariables,
  APITypes.OnUpdateMemberSubscription
>;
export const onDeleteMember = /* GraphQL */ `subscription OnDeleteMember(
  $filter: ModelSubscriptionMemberFilterInput
  $owner: String
) {
  onDeleteMember(filter: $filter, owner: $owner) {
    id
    name
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteMemberSubscriptionVariables,
  APITypes.OnDeleteMemberSubscription
>;
