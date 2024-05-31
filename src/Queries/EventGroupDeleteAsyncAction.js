import { CreateAsyncActionFromMutation} from "@hrbolek/uoisfrontend-shared/src"
 
const mutation = `
mutation MyMutation($eventId: UUID!, $groupId: UUID!) {
  result: eventGroupDelete(eventGroup: {eventId: $eventId, groupId: $groupId}) {
    id
    msg
    event {
      groups {
        id
        name
      }
    }
  }
}
`
 
export const EventGroupDeleteAsyncAction = CreateAsyncActionFromMutation(mutation)