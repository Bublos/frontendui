import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation = `mutation($id: UUID!, $lastchange: DateTime!, $name: String!, $mastergroup_id: UUID) {
  result: groupUpdate(group: {
    id: $id, 
    lastchange: $lastchange, 
    name: $name, 
    mastergroupId: $mastergroup_id
  }) {
    id
    msg
    result: group {
      __typename
      id
      lastchange
      name
      mastergroup {
        id
        name

      }
    }
  }
}`

export const UpdateGroupAsyncAction = CreateAsyncActionFromMutation(mutation)