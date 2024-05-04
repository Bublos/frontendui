import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation = `mutation($id: UUID!, $lastchange: DateTime!, $name: String!, $surname: String!, $email: String!) {
  result: userUpdate(user: {
    id: $id, 
    lastchange: $lastchange, 
    name: $name, 
    surname: $surname,
    email: $email
  }) {
    id
    msg
    result: user {
      __typename
      id
      lastchange
      name
      surname
      fullname
      email
    }
  }
}`

export const UpdateUserAsyncAction = CreateAsyncActionFromMutation(mutation)