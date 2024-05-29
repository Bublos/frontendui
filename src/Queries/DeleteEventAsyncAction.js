import { CreateAsyncActionFromMutation } from "@hrbolek/uoisfrontend-shared/src"

const mutation = `
mutation ($id:UUID!){
  result:eventDelete(id: $id) {
    id
    msg
    result:event {
      id
    }
  }
}
`
export const DeleteEventAsyncAction = CreateAsyncActionFromMutation(mutation)