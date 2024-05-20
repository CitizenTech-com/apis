/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUsersInput = {
  id?: string | null,
  name: string,
};

export type ModelUsersConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelUsersConditionInput | null > | null,
  or?: Array< ModelUsersConditionInput | null > | null,
  not?: ModelUsersConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Users = {
  __typename: "Users",
  id: string,
  name: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateUsersInput = {
  id: string,
  name?: string | null,
};

export type DeleteUsersInput = {
  id: string,
};

export type ModelUsersFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUsersFilterInput | null > | null,
  or?: Array< ModelUsersFilterInput | null > | null,
  not?: ModelUsersFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUsersConnection = {
  __typename: "ModelUsersConnection",
  items:  Array<Users | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionUsersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUsersFilterInput | null > | null,
  or?: Array< ModelSubscriptionUsersFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateUsersMutationVariables = {
  input: CreateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type CreateUsersMutation = {
  createUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUsersMutationVariables = {
  input: UpdateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type UpdateUsersMutation = {
  updateUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUsersMutationVariables = {
  input: DeleteUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type DeleteUsersMutation = {
  deleteUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetUsersQueryVariables = {
  id: string,
};

export type GetUsersQuery = {
  getUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUsersConnection",
    items:  Array< {
      __typename: "Users",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
  owner?: string | null,
};

export type OnCreateUsersSubscription = {
  onCreateUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUsersSubscription = {
  onUpdateUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUsersSubscriptionVariables = {
  filter?: ModelSubscriptionUsersFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUsersSubscription = {
  onDeleteUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
