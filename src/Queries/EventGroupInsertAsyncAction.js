import { CreateAsyncActionFromMutation} from "@hrbolek/uoisfrontend-shared/src"
 
const mutation = `
mutation MyMutation($eventId: UUID!, $groupId: UUID!) {
  result: eventGroupInsert(eventGroup: {eventId: $eventId, groupId: $groupId}) {
    id
    msg
    result: event {
      groups {
        id
        name
      }
    }
  }
}
`
 
export const EventGroupInsertAsyncAction = CreateAsyncActionFromMutation(mutation)